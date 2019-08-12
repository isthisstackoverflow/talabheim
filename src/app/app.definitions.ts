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
  Used = 'Eingesetzt',
  Injured = 'Verletzt',
  Dead = 'Gefallen'
}

export interface Partisan {
  name: string;
  note: string;
  class: Class;
  status: Status;
}

export interface LogEntry {
  author: string;
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
    name: 'Hans Hasenfuß',
    note: 'riecht nach Fahnenflucht',
    class: Class.Militia,
    status: Status.Healthy
  }],
  logList: [{
    author: 'System',
    text: 'Spielbeginn',
    date: Date.now()
  }],
  idCounter: 1
};
