import shuffle from 'lodash.shuffle';
import { Component, DoCheck } from '@angular/core';
import { StoreService } from '../store.service';
import {
  Mission, Difficulty, Class, Status, Partisan, Group,
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

  lastThrown = 0;
  probability = 0;
  disableExecution = true;
  disableOptimization = true;

  lastResultPercentage = null;
  lastResultThrown = null;
  lastResultBy = null;
  lastResultDice = null;
  lastResultDiceThrown = null;
  lastResultMissionType = null;
  lastResultClasses = null;
  lastResultHurt = null;
  lastResultDied = null;

  constructor(public storeService: StoreService) {}

  ngDoCheck() {
    this.chosenPartisani = this.chosenPartisani.filter(p => p.status === Status.Healthy);
    this.chosenPartisaniToHeal = this.chosenPartisaniToHeal.filter(p => p.status === Status.Injured);
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
    this.chosenMission = null;
    this.chosenDifficulty = null;
    this.chosenPartisani = [];
    this.chosenPartisaniToHeal = [];
    this.update();
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
      this.storeService.state.stock === 0 ||
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

  chooseGroup(group: Group) {
    this.chosenPartisani = group.partisani
      .map(id => this.storeService.state.partisani.find(p => p.id === id))
      .filter(p => p.status === Status.Healthy);
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
      targetValue -= difficultyModifier.get(Difficulty[this.chosenDifficulty]);
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

  getRandomSpecialistClass() {
    return shuffle([
      Class.Knight,
      Class.KnightOfTheVerdantField,
      Class.Looter,
      Class.Priest,
      Class.Technicus
    ])[0];
  }

  performMission() {
    this.lastResultPercentage = this.probability;
    this.lastResultMissionType = Mission[this.chosenMission];
    this.lastResultDice = null;
    this.lastResultDiceThrown = null;
    this.lastResultClasses = null;
    this.lastResultHurt = null;
    this.lastResultDied = null;

    this.storeService.removeStock('System');
    const thrownValue = this.throwDice();
    this.lastResultThrown = thrownValue;
    this.lastThrown = thrownValue;
    this.chosenPartisani.forEach(p => p.status = Status.Used);
    if (thrownValue <= this.probability) {
      // success
      this.storeService.log(
        `${Mission[this.chosenMission]} durch ${this.storeService.prettyPartisans(this.chosenPartisani)} erfolgreich durchgeführt. ✔️
        Es wurde ${thrownValue} auf ${this.probability} geworfen.`,
        'System'
      );
      if (Mission[this.chosenMission] === Mission.Healing) {
        this.chosenPartisaniToHeal.forEach(p => p.status = Status.Healing);
        this.storeService.log(
          `Geheilt und nächste Runde einsatzbereit ist/sind: ${this.chosenPartisaniToHeal.map(p => p.name).join(', ')}`,
          'System'
        );
      } else if (Mission[this.chosenMission] === Mission.Supply) {
        const sides = difficultyDice.get(Difficulty[this.chosenDifficulty]);
        const supply = this.throwDice(sides);
        this.storeService.log(
          `Mit einem d${sides} ${supply === 1 ? 'wurde 1 Vorrat' : `wurden ${supply} Vorräte`} erwürfelt.`,
          'System'
        );
        this.lastResultDice = sides;
        this.lastResultDiceThrown = supply;
        this.storeService.addStock('System', supply);
      } else if (Mission[this.chosenMission] === Mission.Liberation) {
        const sides = difficultyDice.get(Difficulty[this.chosenDifficulty]);
        const dudes = this.throwDice(sides);
        const classes = Array(dudes)
          .fill(Class.Militia)
          .map(x => this.throwDice(10) === 1 ? this.getRandomSpecialistClass() : x);
        this.storeService.log(
          `Mit einem d${sides} wurde(n) ${dudes} Partisan(en) der folgenden Klasse(n) erwürfelt: [${classes.join(', ')}].`,
          'System'
        );
        this.lastResultDice = sides;
        this.lastResultDiceThrown = dudes;
        this.lastResultClasses = classes.join(', ');
        classes.forEach(c => {
          this.storeService.addPartisan('System', c);
        });
      } else {
        // Spying, Sabotage, Assassionation
        // nothing
      }
    } else {
      // failure
      const affected = this.throwDice(this.chosenPartisani.length);
      const affectedPartisani =
        shuffle(this.chosenPartisani)
        .slice(0, affected);
      const hurt = [];
      const died = [];
      affectedPartisani.forEach(partisan => {
        const thrown = this.throwDice();
        if (thrown > 75) {
          partisan.status = Status.Dead;
          died.push(partisan);
        } else {
          partisan.status = Status.Injured;
          hurt.push(partisan);
        }
      });
      this.storeService.log(
        `${Mission[this.chosenMission]} durch ${this.storeService.prettyPartisans(this.chosenPartisani)} durchgeführt und fehlgeschlagen. ❌
        Es wurde ${thrownValue} auf ${this.probability} geworfen.
        ${affected} Partisan(en) trägt/tragen die Konsequenzen.
        Verletzt: ${this.storeService.prettyPartisans(hurt)};
        Verstorben: ${this.storeService.prettyPartisans(died)}`,
        'System'
      );
      this.lastResultDice = this.chosenPartisani.length;
      this.lastResultDiceThrown = affected;
      this.lastResultHurt = this.storeService.prettyPartisans(hurt);
      this.lastResultDied = this.storeService.prettyPartisans(died);
    }
    this.reset();
  }
}
