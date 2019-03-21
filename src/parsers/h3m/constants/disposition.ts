export enum Disposition {
  Compliant, // will always join hero
  Friendly, // likely to join hero
  Aggressive, // may join hero
  Hostile, // unlikely to join hero
  Savage // will never join hero
}

export const dispositioEnum = {
  [Disposition.Compliant]: 0,
  [Disposition.Friendly]: 1,
  [Disposition.Aggressive]: 2,
  [Disposition.Hostile]: 3,
  [Disposition.Savage]: 4
}
