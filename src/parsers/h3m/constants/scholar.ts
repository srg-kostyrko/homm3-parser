export enum ScholarRaward {
  Random = 'Random',
  PrimarySkill = 'PrimarySkill',
  SecondarySkill = 'SecondarySkill',
  Spell = 'Spell',
}

export const schoalrRewardEnum = {
  [ScholarRaward.Random]: -1,
  [ScholarRaward.PrimarySkill]: 0,
  [ScholarRaward.SecondarySkill]: 1,
  [ScholarRaward.Spell]: 2,
}
