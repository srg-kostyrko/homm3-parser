import { uint8, uint32, enums, when, struct, flag } from 'binary-markup'
import { isNotRoE, hommString } from './common.bml'
import { Difficulty } from './constants'

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
  enums(uint8, {
    [Difficulty.Easy]: 0,
    [Difficulty.Normal]: 1,
    [Difficulty.Hard]: 2,
    [Difficulty.Expert]: 3,
    [Difficulty.Impossible]: 4
  })`difficulty`,
  when(isNotRoE, uint8)`masteryCap`
)
