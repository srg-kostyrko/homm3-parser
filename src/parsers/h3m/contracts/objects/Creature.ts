import { Resources } from '../common'
import { Artifact } from '../enums/Artifact'
import { Disposition } from '../enums/Disposition'
import { FlaggedProp, Omit } from '../../../../helpers/types'

export interface Treasure {
  resources: Resources
  artifact: Artifact
}

export interface MessageAndTreasure {
  message: string
  treasure: Treasure
}

export type CreatureData = {
  absodId: number
  quantity: number
  disposition: Disposition
  neverFlees: boolean
  doesNotGrow: boolean
} & FlaggedProp<'hasMessageAndTreasure', 'messageAndTreasure', MessageAndTreasure>

export type CreatureDataRoE = Omit<CreatureData, 'absodId'>
