import { QuestReward } from '../enums/QuestReward'
import { Artifact } from '../enums/Artifact'
import { Spell } from '../enums/Spell'
import { Resource } from '../enums/Resource'
import { PrimarySkill } from '../enums/PrimarySkill'
import { CreatureSlot, SecondarySkillData } from '../common'
import { Quest } from './Quest'

export type SeersHutQuestReward =
  | {
      rewardType: QuestReward.NONE
    }
  | {
      rewardType: QuestReward.Experience
      reward: number
    }
  | {
      rewardType: QuestReward.SecondarySkill
      reward: SecondarySkillData
    }
  | {
      rewardType: QuestReward.Artifact
      reward: Artifact
    }
  | {
      rewardType: QuestReward.Luck
      reward: number
    }
  | {
      rewardType: QuestReward.Morale
      reward: number
    }
  | {
      rewardType: QuestReward.Spell
      reward: Spell
    }
  | {
      rewardType: QuestReward.Resource
      reward: {
        resource: Resource
        quantity: number
      }
    }
  | {
      rewardType: QuestReward.PrimarySkill
      reward: {
        skill: PrimarySkill
        bonus: number
      }
    }
  | {
      rewardType: QuestReward.Creature
      reward: CreatureSlot
    }

export type SeersHut = {
  quest: Quest
} & SeersHutQuestReward

export type SeersHutRoE = {
  artifactType: Artifact
} & SeersHutQuestReward
