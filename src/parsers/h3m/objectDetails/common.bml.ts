import { struct, uint32, int32, int8, uint8, array, flag, when, ctx, skip } from 'binary-markup'
import {
  army,
  hommString,
  resources,
  primarySkills,
  secondarySkill,
  artifact,
  spell,
  creatureSlot,
} from '../common.bml'

export const guardians = struct(
  hommString`message`,
  flag`hasCreatures`,
  when(ctx`hasCreatures`, army)`creatures`,
  skip(4),
)

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
