import { Player } from '../enums/Player'
import { Hero } from '../enums/Hero'
import { Formation } from '../enums/Formation'
import { FlaggedProp } from '../../../../helpers/types'
import { Gender } from '../../constants'
import { Army, Artifacts, PrimarySkills } from '../common'
import { Spell } from '../enums/Spell'
import { SecondarySkillType } from '../enums/SecondarySkill'

export type HeroData = {
  absodId: number
  owner: Player
  hero: Hero
  formation: Formation
  patrolRadius: number
  biography: FlaggedProp<'hasBiography', 'biography', string>
  gender: Gender
  hasSpells: boolean
  spells: Spell[]
} & FlaggedProp<'hasExperience', 'experience', number> &
  FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasFace', 'face', number> &
  FlaggedProp<
    'hasSecondarySkills',
    'secondarySkills',
    {
      count: number
      skills: SecondarySkillType[]
    }
  > &
  FlaggedProp<'hasCreatures', 'creatures', Army> &
  FlaggedProp<'hasArtifacts', 'artifacts', Artifacts> &
  FlaggedProp<'hasPrimarySkills', 'primarySkills', PrimarySkills>

export type HeroDataAB = {
  absodId: number
  owner: Player
  hero: Hero
  experience: number
  formation: Formation
  patrolRadius: number
  biography: FlaggedProp<'hasBiography', 'biography', string>
  gender: Gender
  spells: Spell
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasFace', 'face', number> &
  FlaggedProp<
    'hasSecondarySkills',
    'secondarySkills',
    {
      count: number
      skills: SecondarySkillType[]
    }
  > &
  FlaggedProp<'hasCreatures', 'creatures', Army> &
  FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>

export type HeroDataRoE = {
  owner: Player
  hero: Hero
  experience: number
  formation: Formation
  patrolRadius: number
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasFace', 'face', number> &
  FlaggedProp<
    'hasSecondarySkills',
    'secondarySkills',
    {
      count: number
      skills: SecondarySkillType[]
    }
  > &
  FlaggedProp<'hasCreatures', 'creatures', Army> &
  FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>

export interface HeroPlaceholder {
  owner: Player
  type: number
  powerRating: number
}
