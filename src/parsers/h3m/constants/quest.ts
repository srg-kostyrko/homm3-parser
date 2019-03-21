export enum QuestType {
  NONE,
  Experience,
  PrimarySkills,
  DefeatHero,
  DefeatMonster,
  Artifacts,
  Creatures,
  Resources,
  BeHero,
  BePlayer
}

export const questEnum = {
  [QuestType.NONE]: 0x00,
  [QuestType.Experience]: 0x01,
  [QuestType.PrimarySkills]: 0x02,
  [QuestType.DefeatHero]: 0x03,
  [QuestType.DefeatMonster]: 0x04,
  [QuestType.Artifacts]: 0x05,
  [QuestType.Creatures]: 0x06,
  [QuestType.Resources]: 0x07,
  [QuestType.BeHero]: 0x08,
  [QuestType.BePlayer]: 0x09
}

export enum QuestReward {
  NONE,
  Experience,
  SpellPoints,
  Morale,
  Luck,
  Resource,
  PrimarySkill,
  SecondarySkill,
  Artifact,
  Spell,
  Creature
}

export const questRewardEnum = {
  [QuestReward.NONE]: 0x00,
  [QuestReward.Experience]: 0x01,
  [QuestReward.SpellPoints]: 0x02,
  [QuestReward.Morale]: 0x03,
  [QuestReward.Luck]: 0x04,
  [QuestReward.Resource]: 0x05,
  [QuestReward.PrimarySkill]: 0x06,
  [QuestReward.SecondarySkill]: 0x07,
  [QuestReward.Artifact]: 0x08,
  [QuestReward.Spell]: 0x09,
  [QuestReward.Creature]: 0x0a
}
