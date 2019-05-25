import { Difficulty } from '../constants'
import { Omit } from '../../../helpers/types'

export interface Info {
  hasHero: boolean
  mapSize: number
  hasTwoLevels: boolean
  name: string
  description: string
  difficulty: Difficulty
  masteryCap: number
}

export type InfoRoE = Omit<Info, 'masteryCap'>
