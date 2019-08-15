import { Injectable } from '@angular/core';
import { State, initialState, Status, Class, Partisan } from './app.definitions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: State = initialState;

  constructor() {}

  addStock(source: string) {
    this.state.stock += 1;
    this.log(`Vorräte erhöht auf ${this.state.stock}.`, source);
  }

  removeStock(source: string) {
    this.state.stock = this.state.stock > 1 ? this.state.stock - 1 : 0;
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

  addPartisan(source: string) {
    this.state.idCounter++;
    this.state.partisani = [...this.state.partisani, {
      id: this.state.idCounter,
      name: `Partisan #${this.state.idCounter}`,
      note: '',
      class: Class.Militia,
      status: Status.Healthy
    }];
    this.log(`Neuen Partisanen erstellt. (#${this.state.idCounter})`, source);
  }

  removePartisan(partisan: Partisan, source: string) {
    this.state.partisani = this.state.partisani.filter(p => p !== partisan);
    this.log(`Partisanen gelöscht. (${JSON.stringify(partisan)})`, source);
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
                Betroffen: [${partisans.map(p => `(#${p.id}) ${p.name}`).join(', ')}]`, source);
    } else {
      this.log('Es wurden keine Zustandsänderungen für Partisanen durchgeführt.', source);
    }
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
    this.removeStock('System');
    this.refreshPartisani('System');
  }
}
