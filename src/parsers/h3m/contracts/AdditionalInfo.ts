import { Hero } from './enums/Hero'
import { FlaggedProp } from '../../../helpers/types'
import { Artifacts, PrimarySkills, SecondarySkillData } from './common'
import { Gender } from '../constants'
import { Spell } from './enums/Spell'
import { SecondarySkillType } from './enums/SecondarySkill'
import { WinConditionData } from './additionalInfo/WinCondition'
import { LoseConditionData } from './additionalInfo/LoseCondition'

export interface Rumor {
  name: string
  desciption: string
}

export interface CustomHero {
  hero: Hero
  face: number
  name: string
  allowed_players: number
}

export interface SecondarySkills {
  count: number
  entries: SecondarySkillData[]
}

type WithExperience = FlaggedProp<'hasExperience', 'experience', number>
type WithSecondarySkills = FlaggedProp<'hasSecondarySkills', 'secondarySkills', SecondarySkills>
type WithArtifacts = FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>
type WithBiography = FlaggedProp<'hasBiography', 'biography', string>
type WithSpells = FlaggedProp<'hasSpells', 'spells', number[]>
type WithPrimarySkills = FlaggedProp<'hasPrimarySkills', 'primarySkills', PrimarySkills>

export type HeroSetting = {
  gender: Gender
} & WithExperience &
  WithSecondarySkills &
  WithArtifacts &
  WithBiography &
  WithSpells &
  WithPrimarySkills

export type HeroSettings = FlaggedProp<'hasSettings', 'settings', HeroSetting>

export type AdditionalInfoBase = {
  teamsCount: number
  teams?: number[]
  availableHeroes: number[]
  rumorsCount: number
  rumors: Rumor[]
} & WinConditionData &
  LoseConditionData

export type AdditionalInfo = AdditionalInfoBase & {
  customHeroesCount: number
  customHeroes: CustomHero[]
  availableArtifacts: number[]
  availableSpells: Spell[]
  availableSkills: SecondarySkillType[]
  heroSettings: HeroSettings[]
}
export type AdditionalInfoAB = AdditionalInfoBase & {
  availableArtifacts: number[]
}
