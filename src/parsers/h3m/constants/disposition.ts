export enum Disposition {
  Compliant = 'Compliant', // will always join hero
  Friendly = 'Friendly', // likely to join hero
  Aggressive = 'Aggressive', // may join hero
  Hostile = 'Hostile', // unlikely to join hero
  Savage = 'Savage', // will never join hero
}

export const dispositioEnum = {
  [Disposition.Compliant]: 0,
  [Disposition.Friendly]: 1,
  [Disposition.Aggressive]: 2,
  [Disposition.Hostile]: 3,
  [Disposition.Savage]: 4,
}
