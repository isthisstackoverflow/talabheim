import shuffle from 'lodash.shuffle';
import { Component, DoCheck } from '@angular/core';
import { StoreService } from '../store.service';
import {
  Mission, Difficulty, Class, Status, Partisan,
  difficultyDice, difficultyModifier, missionTypeBonus
} from '../app.definitions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent implements DoCheck {
  mission = Mission;
  difficulty = Difficulty;
  status = Status;
  class = Class;
  keys = Object.keys;

  chosenMission: Mission | null = null;
  chosenDifficulty: Difficulty | null = null;
  chosenPartisani: Partisan[] = [];
  chosenPartisaniToHeal: Partisan[] = [];

  probability = 0;
  disableExecution = true;
  disableOptimization = true;

  constructor(public storeService: StoreService) {}

  ngDoCheck() {
    const next = this.chosenPartisani.filter(p => p.status === Status.Healthy);
    this.chosenPartisani = next;
    this.update();
  }

  partisanFitsMission(p: Partisan) {
    return missionTypeBonus.get(Mission[this.chosenMission]) === p.class;
  }

  choseMissionWithDifficulty() {
    return Mission[this.chosenMission] === Mission.Liberation || Mission[this.chosenMission] === Mission.Supply;
  }

  throwDice(d: number = 100) {
    return Math.floor(Math.random() * d) + 1;
  }

  reset() {
    // TODO reset form completely
  }

  update() {
    let probability = 0;
    let militiaCount = 0;
    if (this.choseMissionWithDifficulty()) {
      probability += difficultyModifier.get(Difficulty[this.chosenDifficulty]) || 0;
    }
    this.chosenPartisani.forEach(partisan => {
      if (Mission[this.chosenMission] === Mission.Healing) {
        probability += partisan.class === Class.Priest ? 100 : 0;
      } else if (partisan.class === Class.Militia) {
        probability += militiaCount++ < 5 ? 10 : 5;
      } else {
        probability += this.partisanFitsMission(partisan)
          ? 20
          : 10;
      }
    });
    this.probability = probability;

    this.disableExecution =
      this.chosenMission === null ||
      this.probability <= 0 ||
      this.chosenPartisani.length === 0 ||
      (this.choseMissionWithDifficulty() && this.chosenDifficulty === null) ||
      (Mission[this.chosenMission] === Mission.Healing && (
        this.chosenPartisani.length !== 1
        || this.chosenPartisani[0].class !== Class.Priest
        || this.chosenPartisaniToHeal.length > 3
        || this.chosenPartisaniToHeal.length < 1
      ));

    this.disableOptimization =
      this.chosenMission === null ||
      (this.choseMissionWithDifficulty() && this.chosenDifficulty === null);
  }

  chooseMission(mission: Mission) {
    this.chosenMission = mission;
    this.update();
  }

  chooseDifficulty(difficulty: Difficulty) {
    this.chosenDifficulty = difficulty;
    this.update();
  }

  choosePartisani(partisani: Partisan[]) {
    this.chosenPartisani = partisani;
    this.update();
  }

  chooseHealPartisani(partisani: Partisan[]) {
    this.chosenPartisaniToHeal = partisani;
    this.update();
  }

  optimize() {
    let availablePartisani = this.storeService.state.partisani.filter(p => p.status === Status.Healthy);
    let chosenPartisani = [];
    let currentValue = 0;
    let militiaCount = 0;
    let targetValue = 100;
    // handle healing separately (differing rules)
    if (Mission[this.chosenMission] === Mission.Healing) {
      availablePartisani.forEach(p => {
        if (currentValue < targetValue && p.class === Class.Priest) {
          chosenPartisani.push(p);
          currentValue += 100;
        }
      });
      this.chosenPartisani = chosenPartisani;
      const chosenPartisaniToHeal = [];
      this.storeService.state.partisani.forEach(p => {
        if (chosenPartisaniToHeal.length < 3 && p.class !== Class.Militia && p.status === Status.Injured) {
          chosenPartisaniToHeal.push(p);
        }
      });
      this.storeService.state.partisani.forEach(p => {
        if (chosenPartisaniToHeal.length < 3 && p.status === Status.Injured) {
          chosenPartisaniToHeal.push(p);
        }
      });
      this.chosenPartisaniToHeal = chosenPartisaniToHeal;
      this.update();
      return;
    }
    if (this.choseMissionWithDifficulty()) {
      targetValue += difficultyModifier.get(Difficulty[this.chosenDifficulty]);
    }
    // use fitting experts
    availablePartisani.forEach(p => {
      if (currentValue < targetValue && this.partisanFitsMission(p)) {
        chosenPartisani.push(p);
        currentValue += 20;
      }
    });
    availablePartisani = availablePartisani.filter(p => !chosenPartisani.includes(p));
    // fill militia
    availablePartisani.forEach(p => {
      if (currentValue < targetValue && p.class === Class.Militia) {
        chosenPartisani.push(p);
        currentValue += militiaCount++ < 5 ? 10 : 5;
      }
    });
    availablePartisani = availablePartisani.filter(p => !chosenPartisani.includes(p));
    // fill other experts
    availablePartisani.forEach(p => {
      if (currentValue < targetValue) {
        chosenPartisani.push(p);
        currentValue += 10;
      }
    });
    // remove unnecessary militia (may have surplus 5% after adding "other experts")
    if (currentValue > targetValue) {
      const firstMilitia = chosenPartisani.find(p => p.class === Class.Militia);
      chosenPartisani = chosenPartisani.filter(p => p !== firstMilitia);
    }
    this.chosenPartisani = chosenPartisani;
    this.update();
  }

  performMission() {
    const thrownValue = this.throwDice();
    if (thrownValue <= this.probability) {
      // success
      // TODO mark chosen partisani used
      if (Mission[this.chosenMission] === Mission.Healing) {
        // mark healed as being healed
      } else if (Mission[this.chosenMission] === Mission.Supply) {
        // Versorgung: throw dice according to difficulty
        // difficultyDice
      } else if (Mission[this.chosenMission] === Mission.Liberation) {
        // difficultyDice
        // Befreiung: throw dice to select dudes (10% chance for random specialist)
      } else {
        // Spying, Sabotage, Assassionation
      }
      // TODO show some kind of modal
    } else {
      // failure
      const affected = this.throwDice(this.chosenPartisani.length);
      const affectedPartisani =
        shuffle(this.chosenPartisani)
        .slice(0, affected);
      affectedPartisani.forEach(partisan => {
        const thrown = this.throwDice();
        if (thrown > 75) {
          partisan.status = Status.Dead;
        } else {
          partisan.status = Status.Injured;
        }
      });
    }
  }
}
