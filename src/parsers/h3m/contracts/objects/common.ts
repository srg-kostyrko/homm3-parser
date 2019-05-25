import { FlaggedProp } from '../../../../helpers/types'
import { Army, Resources, PrimarySkills, CreatureSlot, SecondarySkillData } from '../common'
import { Artifact } from '../enums/Artifact'
import { Spell } from '../enums/Spell'

export type Guardians = {
  message: string
} & FlaggedProp<'hasCreatures', 'creatures', Army>

export type WithGuardians = FlaggedProp<'hasGuardians', 'guardians', Guardians>

export interface Contents {
  experience: number
  spellPoints: number
  morale: number
  luck: number
  resources: Resources
  primarySkills: PrimarySkills
  secondarySkillsCount: number
  secondarySkills: SecondarySkillData[]
  artifactsCount: number
  artifacts: Artifact[]
  spellsCount: number
  spells: Spell[]
  creaturesCount: number
  creatures: CreatureSlot[]
}
