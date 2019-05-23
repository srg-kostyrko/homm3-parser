import {
  uint8,
  uint32,
  bytes,
  pass,
  when,
  ctx,
  flag,
  branch,
  skip,
  enums,
  array,
  struct,
} from 'binary-markup'
import { Player } from '../constants/player'
import { Hero } from '../constants/hero'
import { Formation, formationEnum } from '../constants/formation'
import { FlaggedProp } from '../../../helpers/types'
import { Gender, MapFormat, genderEnum } from '../constants'
import {
  PrimarySkills,
  SecondarySkill,
  Army,
  Artifacts,
  isNotRoE,
  owner,
  hero,
  hommString,
  isSoD,
  secondarySkill,
  army,
  artifacts,
  primarySkills,
} from '../common.bml'
import { spellsMask, Spell, spellEnum } from '../constants/spell'

export type HeroData = {
  absodId?: number
  owner: Player
  hero: Hero
  hasExperience?: boolean
  experience?: number
  formation: Formation
  patrolRadius: number
  biography: FlaggedProp<'hasBiography', 'biography', string>
  gender: Gender
  hasSpells?: boolean
  spells: number | number[]
  hasPrimarySkills?: boolean
  primarySkills?: PrimarySkills
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasFace', 'face', number> &
  FlaggedProp<
    'hasSecondarySkills',
    'secondarySkills',
    {
      count: number
      skills: SecondarySkill[]
    }
  > &
  FlaggedProp<'hasCreatures', 'creatures', Army> &
  FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>

export const heroData = struct(
  when(isNotRoE, uint32)`absodId`,
  owner`owner`,
  hero`hero`,
  flag`hasName`,
  when(ctx`hasName`, hommString)`name`,
  when(isSoD, flag)`hasExperience`,
  branch(ctx`format`, {
    [MapFormat.ROE]: uint32,
    [MapFormat.AB]: uint32,
    [MapFormat.SOD]: when(ctx`hasExperience`, uint32),
  })`experience`,
  flag`hasFace`,
  when(ctx`hasFace`, uint8)`face`,
  flag`hasSecondarySkills`,
  when(
    ctx`hasSecondarySkills`,
    struct(uint32`count`, array(secondarySkill, ctx`count`)`skills`),
  )`secondarySkills`,
  flag`hasCreatures`,
  when(ctx`hasCreatures`, army)`creatures`,
  enums(uint8, formationEnum)`formation`,
  flag`hasArtifacts`,
  when(ctx`hasArtifacts`, artifacts)`artifacts`,
  uint8`patrolRadius`, // default 0xFF
  when(
    isNotRoE,
    struct(flag`hasBiography`, when(ctx`hasBiography`, hommString)`biography`),
  )`biography`,
  when(isNotRoE, enums(uint8, genderEnum))`gender`,
  when(isSoD, flag)`hasSpells`,
  branch<null | any | Spell[]>(ctx`format`, {
    [MapFormat.ROE]: pass,
    [MapFormat.AB]: enums(uint8, spellEnum), // In AB only a single spell can be specified here, 0xFE is default, 0xFF none
    [MapFormat.SOD]: when(ctx`hasSpells`, spellsMask, pass),
  })`spells`,
  when(isSoD, flag)`hasPrimarySkills`,
  when(ctx`hasPrimarySkills`, primarySkills)`primarySkills`,
  skip(16),
)

export interface HeroPlaceholder {
  owner: Player
  type: number
  powerRating: number
}

export const heroPlaceholder = struct(
  owner`owner`,
  uint8`type`,
  when(ctx`type`.eq(0xff), uint8)`powerRating`,
)
