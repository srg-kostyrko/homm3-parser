import { pass, byte, struct, uint32, when, ctx, branch, enums, skip } from 'binary-markup'
import {
  isRoE,
  isNotRoE,
  experience,
  artifact,
  spell,
  resource,
  creatureSlot,
  secondarySkill,
} from '../common.bml'
import { quest } from './quest.bml'
import { questRewardEnum } from '../enums/quest'
import { primarySkillEnum } from '../enums/skill'
import { QuestReward } from '../contracts/enums/QuestReward'

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

export const seersHut = struct(
  // In RoE the only type of quest is "Return with artifacts", which in ROE is
  // always only one artifact. The quest hence consists of one byte signifying
  // the artifact type, 0xFF means quest type is None. In AB/SOD 0x00 means None.
  when(isRoE, artifact)`artifactType`,
  when(isNotRoE, quest)`quest`,
  enums(byte, questRewardEnum)`rewardType`,
  branch(ctx`rewardType`, rewardBranches)`reward`,
  skip(2),
)
