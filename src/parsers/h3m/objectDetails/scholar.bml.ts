import { int8, uint8, struct, skip, enums, branch, ctx } from 'binary-markup'
import { schoalrRewardEnum } from '../enums/scholar'
import { primarySkillEnum, secondarySkillEnum } from '../enums/skill'
import { spellEnum } from '../enums/spell'
import { ScholarRaward } from '../contracts/enums/ScholarReward'

export const scholar = struct(
  //
  enums(int8, schoalrRewardEnum)`rewardType`,
  branch<{}>(
    ctx`rewardType`,
    {
      [ScholarRaward.PrimarySkill]: enums(uint8, primarySkillEnum),
      [ScholarRaward.SecondarySkill]: enums(uint8, secondarySkillEnum),
      [ScholarRaward.Spell]: enums(uint8, spellEnum),
    },
    uint8,
  )`rewardValue`,
  skip(6),
)
