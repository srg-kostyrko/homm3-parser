import { struct, uint32, int32, int8, uint8, array, flag, when, ctx, skip } from 'binary-markup'
import { FlaggedProp } from '../../../helpers/types'
import {
  Army,
  army,
  hommString,
  Resources,
  PrimarySkills,
  SecondarySkill,
  CreatureSlot,
  resources,
  primarySkills,
  secondarySkill,
  artifact,
  spell,
  creatureSlot,
} from '../common.bml'
import { Artifact } from '../constants/artifact'
import { Spell } from '../constants/spell'

export type Guardians = {
  message: string
} & FlaggedProp<'hasCreatures', 'creatures', Army>

export type WithGuardians = FlaggedProp<'hasGuardians', 'guardians', Guardians>

export const guardians = struct(
  hommString`message`,
  flag`hasCreatures`,
  when(ctx`hasCreatures`, army)`creatures`,
  skip(4),
)

export interface Contents {
  experience: number
  spellPoints: number
  morale: number
  luck: number
  resources: Resources
  primarySkills: PrimarySkills
  secondarySkillsCount: number
  secondarySkills: SecondarySkill[]
  artifactsCount: number
  artifacts: Artifact[]
  spellsCount: number
  spells: Spell[]
  creaturesCount: number
  creatures: CreatureSlot[]
}

export const contents = struct(
  uint32`experience`,
  int32`spellPoints`,
  int8`morale`,
  int8`luck`,
  resources`resources`,
  primarySkills`primarySkills`,
  uint8`secondarySkillsCount`,
  array(secondarySkill, ctx`secondarySkillsCount`)`secondarySkills`,
  uint8`artifactsCount`,
  array(artifact, ctx`artifactsCount`)`artifacts`,
  uint8`spellsCount`,
  array(spell, ctx`spellsCount`)`spells`,
  uint8`creaturesCount`,
  array(creatureSlot, ctx`creaturesCount`)`creatures`,
  skip(8),
)
