import { Component } from '@angular/core';
import { StoreService } from '../store.service';
import { Mission, Difficulty, Class } from '../app.definitions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.sass']
})
export class MissionComponent {
  mission = Mission;
  difficulty = Difficulty;
  class = Class;
  keys = Object.keys;

  chosenMission: Mission | null;
  chosenDifficulty: Difficulty | null;

  constructor(public storeService: StoreService) {}

  throwDice(d: number = 100) {
    return Math.floor(Math.random() * d) + 1;
  }

  optimize() {
    // Milizionär	+10% bis 5 Milizionäre, danach 5%
    // Ritter des saftgrünen Feldes	+20% auf Spionagemissionen
    // Technicus	+20% auf Sabotagemissionen
    // Ritter	+20% auf Anschläge
    // Priester	+20% auf Befreiungsmissionen
    // Plünderer	+20% auf Versorgungstoure
  }

  performMission() {
    // Spionage/Sabotage/Anschlag/Befreiung/Versorgung/Heilung

    // Befreiung/Versorgung:
    // Schwierigkeit	simpel	leicht	mittel	schwer	übel
    // Modifikator	+20%	+10%	0	-10%	-20%
    // Würfelwurf	W4	W6	W8	W10	W12

    // Bei Befreiung: Jeder Partisan hat 10% Chance zufälliger Spezialist zu sein
  }

  performFailure() {
    // Fehlschlag:
    // Wx Mitstreiter, wobei x die Größe der Gruppe ist, abgerundet auf die gängigen Würfel W4, 6, 8, 10, 12, 20,
    // müssen die Konsequenzen tragen.
    // Um   zu ermitteln ob ein Spezialist erwischt wurde wird für jeden betroffenen Mitstreiter ein W100 geworfen und mit
    // 100-(Spezialisten/Mitstreiter)*100 verglichen. Der Wüfelwurf wird nach Ausscheiden eines Spezialisten nicht angepasst.
    // Es wird immer mit der Startzusammenstellung verglichen.
    // Für jeden betroffenen Mitstreiter wird ein W100 geworfen, bei einer 76+ wurde der Mitstreiter erschlagen,
    // bei einer 0-75 ist er ausgeschaltet
  }
}
