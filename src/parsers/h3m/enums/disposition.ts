import { Disposition } from '../contracts/enums/Disposition'

export const dispositioEnum = {
  [Disposition.Compliant]: 0,
  [Disposition.Friendly]: 1,
  [Disposition.Aggressive]: 2,
  [Disposition.Hostile]: 3,
  [Disposition.Savage]: 4,
}
