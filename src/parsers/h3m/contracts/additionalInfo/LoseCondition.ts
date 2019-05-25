import { LoseCondition } from '../enums/LoseCondition'

interface Position {
  x: number
  y: number
  z: number
}

interface Time {
  days: number
}

export interface LoseConditionVariant<T extends LoseCondition, V> {
  loseCondition: T
  loseConditionData: V
}

export type LoseConditionData =
  | LoseConditionVariant<LoseCondition.LoseTown | LoseCondition.LoseHero, Position>
  | LoseConditionVariant<LoseCondition.Time, Time>
