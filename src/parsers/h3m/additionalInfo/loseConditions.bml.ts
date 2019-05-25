import { uint8, uint16, struct } from 'binary-markup'
import { LoseCondition } from '../contracts/enums/LoseCondition'

const position = struct(
  //
  uint8`x`,
  uint8`y`,
  uint8`z`,
)

const time = struct(uint16`days`)

export const loseConditionsBranches = {
  [LoseCondition.LoseTown]: position,
  [LoseCondition.LoseHero]: position,
  [LoseCondition.Time]: time,
}
