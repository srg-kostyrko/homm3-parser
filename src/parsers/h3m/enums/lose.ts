import { LoseCondition } from '../contracts/enums/LoseCondition'

export const loseConditionsEnum = {
  [LoseCondition.LoseTown]: 0x00,
  [LoseCondition.LoseHero]: 0x01,
  [LoseCondition.Time]: 0x02,
}
