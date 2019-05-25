import { PrimarySkills, Resources, CreatureSlot } from '../common'
import { Hero } from '../enums/Hero'
import { Player } from '../enums/Player'
import { QuestType } from '../enums/QuestType'
import { Artifact } from '../enums/Artifact'

export interface QuestDescription<T extends QuestType, O> {
  questType: T
  objective: O
  deadline: number[]
  messages: {
    proposalMessage: string
    progressMessage: string
    completionMessage: string
  }
}

export type Quest =
  | {
      questType: QuestType.NONE
    }
  | QuestDescription<QuestType.Experience | QuestType.DefeatHero | QuestType.DefeatMonster, number>
  | QuestDescription<QuestType.PrimarySkills, PrimarySkills>
  | QuestDescription<QuestType.Resources, Resources>
  | QuestDescription<QuestType.BeHero, Hero>
  | QuestDescription<QuestType.BePlayer, Player>
  | QuestDescription<
      QuestType.Creatures,
      {
        count: number
        creatures: CreatureSlot[]
      }
    >
  | QuestDescription<
      QuestType.Artifacts,
      {
        count: number
        creatures: Artifact[]
      }
    >
