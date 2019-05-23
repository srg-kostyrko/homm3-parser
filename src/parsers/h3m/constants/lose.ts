export enum LoseCondition {
  LoseTown = 'LoseTown',
  LoseHero = 'LoseHero',
  Time = 'Time',
}

export const loseConditionsEnum = {
  [LoseCondition.LoseTown]: 0x00,
  [LoseCondition.LoseHero]: 0x01,
  [LoseCondition.Time]: 0x02,
}
