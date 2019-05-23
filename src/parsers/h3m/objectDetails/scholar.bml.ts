import { int8, uint8, struct, skip, enums, branch, ctx } from 'binary-markup'
import { schoalrRewardEnum, ScholarRaward } from '../constants/scholar'
import {
  primarySkillEnum,
  secondarySkillEnum,
  PrimarySkill,
  SecondarySkillType,
} from '../constants/skill'
import { spellEnum, Spell } from '../constants/spell'

export type Scholar =
  | {
      rewardType: ScholarRaward.Random
      rewardValue: 0
    }
  | {
      rewardType: ScholarRaward.PrimarySkill
      rewardValue: PrimarySkill
    }
  | {
      rewardType: ScholarRaward.SecondarySkill
      rewardValue: SecondarySkillType
    }
  | {
      rewardType: ScholarRaward.Spell
      rewardValue: Spell
    }

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
