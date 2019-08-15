export enum Class {
  Militia = 'Milizionär',
  KnightOfTheVerdantField = 'Ritter des saftgrünen Feldes',
  Technicus = 'Technikus',
  Knight = 'Ritter',
  Priest = 'Priester',
  Looter = 'Plünderer'
}

export enum Status {
  Healthy = 'Einsatzbereit',
  Healing = 'Wird geheilt',
  Used = 'Eingesetzt',
  Injured = 'Verletzt',
  Dead = 'Gefallen'
}

export enum Mission {
  Spying = 'Spionage',
  Sabotage = 'Sabotage',
  Assassination = 'Anschlag',
  Liberation = 'Befreiung',
  Supply = 'Versorgung',
  Healing = 'Heilung'
}

export enum Difficulty {
  Simple = 'Simpel',
  Easy = 'Leicht',
  Average = 'Mittel',
  Hard = 'Schwer',
  Evil = 'Übel'
}

export interface Partisan {
  id: number;
  name: string;
  note: string;
  class: Class;
  status: Status;
}

export interface LogEntry {
  source: string;
  text: string;
  date: number;
}

export interface State {
  day: number;
  stock: number;
  partisani: Partisan[];
  logList: LogEntry[];
  idCounter: number;
}

export const initialState: State = {
  day: 1,
  stock: 4,
  partisani: [{
    id: 0,
    name: 'Hans Hasenfuß',
    note: 'riecht nach Fahnenflucht',
    class: Class.Militia,
    status: Status.Healthy
  }],
  logList: [{
    source: 'System',
    text: 'Spielbeginn',
    date: Date.now()
  }],
  idCounter: 0
};
