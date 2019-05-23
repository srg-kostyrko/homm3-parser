import {
  byte,
  uint8,
  uint32,
  branch,
  array,
  when,
  struct,
  ctx,
  bytes,
  enums,
  flag,
  skip,
} from 'binary-markup'
import { H3M_MAX_PLAYERS, Gender, genderEnum } from './constants'
import {
  isRoE,
  isNotRoE,
  isSoD,
  primarySkills,
  secondarySkill,
  artifacts,
  hero,
  hommString,
  PrimarySkills,
  Artifacts,
  SecondarySkill,
} from './common.bml'
import { LoseCondition, loseConditionsEnum } from './constants/lose'
import { LoseConditionData, loseConditionsBranches } from './additionalInfo/loseConditions.bml'
import { WinCondition, winConditionsEnum } from './constants/win'
import { winConditionsBranches, WinConditionData } from './additionalInfo/winConditions.bml'
import { Hero } from './constants/hero'
import { FlaggedProp } from '../../helpers/types'
import { spellsMask, Spell } from './constants/spell'
import { skillsMask, SecondarySkillType } from './constants/skill'

export interface Rumor {
  name: string
  desciption: string
}
const rumor = struct(
  //
  hommString`name`,
  hommString`desciption`,
)

export interface CustomHero {
  hero: Hero
  face: number
  name: string
  allowed_players: number
}
const customHero = struct(
  //
  hero`hero`,
  uint8`face`,
  hommString`name`,
  uint8`allowed_players`,
)

export interface SecondarySkills {
  count: number
  entries: SecondarySkill[]
}
const secondarySkills = struct(
  //
  uint32`count`,
  array(secondarySkill, ctx`count`)`entries`,
)

type WithExperience = FlaggedProp<'hasExperience', 'experience', number>
type WithSecondarySkills = FlaggedProp<'hasSecondarySkills', 'secondarySkills', SecondarySkills>
type WithArtifacts = FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>
type WithBiography = FlaggedProp<'hasBiography', 'biography', string>
type WithSpells = FlaggedProp<'hasSpells', 'spells', number[]>
type WithPrimarySkills = FlaggedProp<'hasPrimarySkills', 'primarySkills', PrimarySkills>

export type HeroData = {
  gender: Gender
} & WithExperience &
  WithSecondarySkills &
  WithArtifacts &
  WithBiography &
  WithSpells &
  WithPrimarySkills

const heroData = struct(
  flag`hasExperience`,
  when(ctx`hasExperience`, uint32)`experience`,
  flag`hasSecondarySkills`,
  when(ctx`hasSecondarySkills`, secondarySkills)`secondarySkills`,
  flag`hasArtifacts`,
  when(ctx`hasArtifacts`, artifacts)`artifacts`,
  flag`hasBiography`,
  when(ctx`hasBiography`, hommString)`biography`,
  enums(uint8, genderEnum)`gender`,
  flag`hasSpells`,
  when(ctx`hasSpells`, spellsMask)`spells`,
  flag`hasPrimarySkills`,
  when(ctx`hasPrimarySkills`, primarySkills)`primarySkills`,
)

export type HeroSettings = FlaggedProp<'hasSettings', 'settings', HeroData>

const heroSettings = struct(
  //
  flag`hasSettings`,
  when(ctx`hasSettings`, heroData)`settings`,
)

export interface AdditionalInfo {
  winCondition: WinCondition
  winConditionData: WinConditionData
  loseCondition: LoseCondition
  loseConditionData: LoseConditionData
  teamsCount: number
  teams?: number[]
  availableHeroes: number[]
  customHeroesCount?: number
  customHeroes: CustomHero[]
  availableArtifacts: number[]
  availableSpells: Spell[]
  availableSkills: SecondarySkillType[]
  rumorsCount: number
  rumors: Rumor[]
  heroSettings: HeroSettings[]
}

export const additionalInfo = struct(
  enums(uint8, winConditionsEnum)`winCondition`,
  branch(ctx`winCondition`, winConditionsBranches)`winConditionData`,
  enums(uint8, loseConditionsEnum)`loseCondition`,
  branch(ctx`loseCondition`, loseConditionsBranches)`loseConditionData`,
  uint8`teamsCount`,
  when(ctx`teamsCount`.gt(0), array(byte, H3M_MAX_PLAYERS))`teams`,
  bytes(context => (isRoE(context) ? 16 : 20))`availableHeroes`,
  when(isNotRoE, uint32),
  when(isSoD, uint8)`customHeroesCount`,
  when(isSoD, array(customHero, ctx`customHeroesCount`))`customHeroes`,
  skip(31),
  when(isNotRoE, bytes(context => (isSoD(context) ? 18 : 17)))`availableArtifacts`,
  when(isSoD, spellsMask)`availableSpells`,
  when(isSoD, skillsMask)`availableSkills`,
  uint32`rumorsRount`,
  array(rumor, ctx`rumorsRount`)`rumors`,
  when(isSoD, array(heroSettings, 156))`heroSettings`,
)