import { uint8, uint16, struct } from 'binary-markup'
import { LoseCondition } from '../constants/lose'

interface Position {
  x: number
  y: number
  z: number
}
const position = struct(
  //
  uint8`x`,
  uint8`y`,
  uint8`z`,
)

interface Time {
  days: number
}
const time = struct(uint16`days`)

export type LoseConditionData = Position | Time

export const loseConditionsBranches = {
  [LoseCondition.LoseTown]: position,
  [LoseCondition.LoseHero]: position,
  [LoseCondition.Time]: time,
}
