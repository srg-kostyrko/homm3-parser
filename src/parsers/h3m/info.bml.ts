import { uint8, uint32, enums, when, struct, flag } from 'binary-markup'
import { isNotRoE, hommString } from './common.bml'
import { difficultyEnum } from './constants'

export const info = struct(
  flag`hasHero`,
  uint32`mapSize`,
  flag`hasTwoLevels`,
  hommString`name`,
  hommString`description`,
  enums(uint8, difficultyEnum)`difficulty`,
  when(isNotRoE, uint8)`masteryCap`,
)
