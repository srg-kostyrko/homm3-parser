import { byte, int32, enums, struct, array, pass, branch, when, ctx } from 'binary-markup'
import {
  experience,
  primarySkills,
  absodId,
  resources,
  hero,
  playerFlag,
  creatureSlot,
  hommString,
  artifact,
} from '../common.bml'
import { questEnum } from '../enums/quest'
import { QuestType } from '../contracts/enums/QuestType'

const questBranches = {
  [QuestType.NONE]: pass,
  [QuestType.Experience]: experience,
  [QuestType.PrimarySkills]: primarySkills,
  [QuestType.DefeatHero]: absodId,
  [QuestType.DefeatMonster]: absodId,
  [QuestType.Resources]: resources,
  [QuestType.BeHero]: hero,
  [QuestType.BePlayer]: playerFlag,
  [QuestType.Creatures]: struct(byte`count`, array(creatureSlot, ctx`count`)`creatures`),
  [QuestType.Artifacts]: struct(byte`count`, array(artifact, ctx`count`)`artifacts`),
}

const messages = struct(
  hommString`proposalMessage`,
  hommString`progressMessage`,
  hommString`completionMessage`,
)

export const quest = struct(
  enums(byte, questEnum)`questType`,
  branch(ctx`questType`, questBranches)`objective`,
  when(ctx`questType`.neq(QuestType.NONE), int32)`deadline`,
  when(ctx`questType`.neq(QuestType.NONE), messages)`messages`,
)
