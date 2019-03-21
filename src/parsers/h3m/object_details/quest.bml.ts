import { byte, uint16, bytes, enums, struct, array, pass, branch, when, ctx } from 'binary-markup'
import {
  experience,
  primarySkills,
  absodId,
  resources,
  hero,
  playerFlag,
  creatureSlot,
  hommString,
  PrimarySkills,
  Resources,
  CreatureSlot
} from '../common.bml'
import { QuestType, questEnum } from '../constants/quest'
import { Hero } from '../constants/hero'
import { Player } from '../player.bml'

type Objective =
  | number
  | PrimarySkills
  | number
  | Resources
  | Hero
  | Player
  | {
      count: number
      creatures: CreatureSlot
    }
  | {
      count: number
      artifacts: number[]
    }

const questBranches = {
  [QuestType.NONE]: pass,
  [QuestType.Experience]: experience,
  [QuestType.PrimarySkills]: primarySkills,
  [QuestType.DefeatHero]: absodId,
  [QuestType.DefeatMonster]: absodId,
  [QuestType.Experience]: resources,
  [QuestType.BeHero]: hero,
  [QuestType.BePlayer]: playerFlag,
  [QuestType.Creatures]: struct(byte`count`, array(creatureSlot, ctx`count`)`creatures`),
  [QuestType.Artifacts]: struct(byte`count`, array(uint16, ctx`count`)`artifacts`)
}

const messages = struct(
  hommString`proposalMessage`,
  hommString`progressMessage`,
  hommString`completionMessage`
)

export type Quest =
  | {
      questType: QuestType.NONE
    }
  | {
      questType: QuestType
      objective: Objective
      deadline: number[]
      messages: {
        proposalMessage: string
        progressMessage: string
        completionMessage: string
      }
    }

export const quest = struct(
  enums(byte, questEnum)`questType`,
  branch<unknown>(ctx`questType`, questBranches)`objective`,
  when(ctx`questType`.neq(QuestType.NONE), bytes(4))`deadline`,
  when(ctx`questType`.neq(QuestType.NONE), messages)`messages`
)
