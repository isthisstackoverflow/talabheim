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
    this.state.partisani = [{
      name: `Partisan #${this.state.idCounter++}`,
      note: '',
      class: Class.Militia,
      status: Status.Healthy
    }, ...this.state.partisani];
    this.log(`Neuen Partisanen erstellt. (#${this.state.idCounter - 1})`, source);
  }

  removePartisan(partisan: Partisan, source: string) {
    this.state.partisani = this.state.partisani.filter(p => p !== partisan);
    this.log(`Partisanen gelöscht. (${JSON.stringify(partisan)})`, source);
  }

  refreshPartisani(source: string) {
    const names = [];
    this.state.partisani.forEach(p =>
      p.status === Status.Used || p.status === Status.Healing
        ? names.push(p.name) && (p.status = Status.Healthy)
        : null
    );
    this.log(`Die Partisanen im Zustand 'Eingesetzt' und 'Wird geheilt' wurden auf 'Einsatzbereit' gestellt.
              Betroffen: [${names.join(', ')}]`, source);
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
