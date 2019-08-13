import { Injectable } from '@angular/core';
import { State, initialState, Status, Class, Partisan } from './app.definitions';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  state: State = initialState;

  constructor() {}

  addStock() {
    this.state.stock += 1;
  }

  removeStock() {
    this.state.stock = this.state.stock > 1 ? this.state.stock - 1 : 0;
  }

  addDay() {
    this.state.day += 1;
  }

  removeDay() {
    this.state.day = this.state.day > 1 ? this.state.day - 1 : 0;
  }

  addPartisan() {
    this.state.partisani = [{
      name: `Partisan #${this.state.idCounter++}`,
      note: '',
      class: Class.Militia,
      status: Status.Healthy
    }, ...this.state.partisani];
  }

  removePartisan(partisan: Partisan) {
    this.state.partisani = this.state.partisani.filter(p => p !== partisan);
  }

  refreshPartisani() {
    this.state.partisani.forEach(p =>
      p.status === Status.Used
        ? p.status = Status.Healthy
        : null
    );
  }

  log(text: string, author: string) {
    this.state.logList.unshift({
      text,
      author,
      date: Date.now()
    });
  }

  logState() {
    this.log(
      `Beginn des Tages ${this.state.day}.
      Es ${this.state.stock === 1 ? 'verbleibt 1 Vorrat' : `verbleiben ${this.state.stock} Vorräte`}.
      `, 'System'
    );
  }

  nextDay() {
    this.addDay();
    this.removeStock();
    this.refreshPartisani();
    this.logState();
  }
}
