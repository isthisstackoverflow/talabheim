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
