import { pass, byte, bytes, struct, uint32, when, ctx, branch, enums, skip } from 'binary-markup'
import {
  isRoE,
  isNotRoE,
  experience,
  artifact,
  spell,
  resource,
  creatureSlot,
  secondarySkill,
  SecondarySkill,
  CreatureSlot,
} from '../common.bml'
import { quest, Quest } from './quest.bml'
import { QuestReward, questRewardEnum } from '../constants/quest'
import { Artifact } from '../constants/artifact'
import { Resource } from '../constants/resource'
import { Spell } from '../constants/spell'
import { primarySkillEnum, PrimarySkill } from '../constants/skill'

const rewardBranches = {
  [QuestReward.NONE]: pass,
  [QuestReward.Experience]: experience,
  [QuestReward.SpellPoints]: uint32,
  [QuestReward.Artifact]: artifact,
  [QuestReward.Luck]: byte,
  [QuestReward.Morale]: byte,
  [QuestReward.Spell]: spell,
  [QuestReward.Resource]: struct(resource`resource`, uint32`quantity`),
  [QuestReward.PrimarySkill]: struct(enums(byte, primarySkillEnum)`skill`, byte`bonus`),
  [QuestReward.SecondarySkill]: secondarySkill,
  [QuestReward.Creature]: creatureSlot,
}

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
      reward: SecondarySkill
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
  artifactType?: Artifact
  quest?: Quest
} & SeersHutQuestReward

export const seersHut = struct(
  // In RoE the only type of quest is "Return with artifacts", which in ROE is
  // always only one artifact. The quest hence consists of one byte signifying
  // the artifact type, 0xFF means quest type is None. In AB/SOD 0x00 means None.
  when(isRoE, artifact)`artifactType`,
  when(isNotRoE, quest)`quest`,
  enums(byte, questRewardEnum)`rewardType`,
  branch<unknown>(ctx`rewardType`, rewardBranches)`reward`,
  skip(2),
)
