import { uint8, uint32, enums, when, struct, flag } from 'binary-markup'
import { isNotRoE, hommString } from './common.bml'
import { Difficulty, difficultyEnum } from './constants'

export interface Info {
  hasHero: boolean
  mapSize: number
  hasTwoLevels: boolean
  name: string
  description: string
  difficulty: Difficulty
  masteryCap: number
}

export const info = struct(
  flag`hasHero`,
  uint32`mapSize`,
  flag`hasTwoLevels`,
  hommString`name`,
  hommString`description`,
  enums(uint8, difficultyEnum)`difficulty`,
  when(isNotRoE, uint8)`masteryCap`,
)
