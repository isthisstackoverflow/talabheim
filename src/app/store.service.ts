import { Injectable } from '@angular/core';
import { State, initialState, Status, Class, Partisan, Group } from './app.definitions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: State = initialState;

  constructor() {}

  addStock(source: string, amount: number = 1) {
    this.state.stock += amount;
    this.log(`Vorräte erhöht auf ${this.state.stock}.`, source);
  }

  removeStock(source: string, amount: number = 1) {
    this.state.stock = this.state.stock > amount ? this.state.stock - amount : 0;
    this.log(`Vorräte gesenkt auf ${this.state.stock}.`, source);
  }

  addDay(source: string) {
    this.state.day += 1;
    this.log(`Tag hochgestellt auf ${this.state.day}.`, source);
  }

  removeDay(source: string) {
    this.state.day = this.state.day > 1 ? this.state.day - 1 : 0;
    this.log(`Tag runtergestellt auf ${this.state.day}.`, source);
  }

  addPartisan(source: string, c: Class = Class.Militia) {
    this.state.idCounter++;
    this.state.partisani = [...this.state.partisani, {
      id: this.state.idCounter,
      name: `${c} #${this.state.idCounter}`,
      note: '',
      class: c,
      status: Status.Healthy
    }];
    this.log(`Neuen Partisanen erstellt. (#${this.state.idCounter}, ${c})`, source);
  }

  addGroup(source: string, g: Group = null) {
    this.state.idCounterGroup++;
    const addedGroup = g || {
      id: this.state.idCounterGroup,
      name: 'Gruppe',
      icon: 'people',
      color: 'black',
      partisani: []
    }
    this.state.groups = [...this.state.groups, addedGroup]
    this.log(`Neue Gruppe erstellt. (${addedGroup.id})`, source);
  }

  removePartisan(partisan: Partisan, source: string) {
    this.state.partisani = this.state.partisani.filter(p => p !== partisan);
    this.log(`Partisanen gelöscht. (${JSON.stringify(partisan)})`, source);
  }

  prettyPartisans(partisans: Partisan[]) {
    return `[${partisans.map(p => `(#${p.id}) ${p.name}`).join(', ')}]`;
  }

  refreshPartisani(source: string) {
    const partisans = [];
    this.state.partisani.forEach(p =>
      p.status === Status.Used || p.status === Status.Healing
        ? partisans.push(p) && (p.status = Status.Healthy)
        : null
    );
    if (partisans.length) {
      this.log(`Die Partisanen im Zustand 'Eingesetzt' oder 'Wird geheilt' wurden auf 'Einsatzbereit' gestellt.
                Betroffen: ${this.prettyPartisans(partisans)}`, source);
    } else {
      this.log('Es wurden keine Zustandsänderungen für Partisanen durchgeführt.', source);
    }
  }

  removeFallenPartisani(source: string) {
    this.state.partisani
      .filter(p => p.status === Status.Dead)
      .forEach(p => this.removePartisan(p, source))
  }

  log(text: string, source: string) {
    if (source) {
      this.state.logList = [{
        text,
        source,
        date: Date.now()
      }, ...this.state.logList];
    }
  }

  nextDay(source: string) {
    this.log('Tageswechsel ☀️', source);
    this.addDay('System');
    this.removeFallenPartisani('System');
    this.removeStock('System', Math.ceil(this.state.partisani.length / 10));
    this.refreshPartisani('System');
  }
}
