import { struct } from 'binary-markup'
import { SecondarySkillType, skillsMask } from '../constants/skill'

export interface WitchHut {
  potentialSkills: SecondarySkillType[]
}

export const witchHut = struct(skillsMask`potentialSkills`)
