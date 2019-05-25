import { ScholarRaward } from '../enums/ScholarReward'
import { PrimarySkill } from '../enums/PrimarySkill'
import { SecondarySkillType } from '../enums/SecondarySkill'
import { Spell } from '../enums/Spell'

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
