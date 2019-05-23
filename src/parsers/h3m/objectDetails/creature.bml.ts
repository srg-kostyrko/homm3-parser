import { uint8, uint16, uint32, enums, flag, when, ctx, skip, struct } from 'binary-markup'
import { isNotRoE, Resources, resources, artifact, hommString } from '../common.bml'
import { dispositioEnum, Disposition } from '../constants/disposition'
import { Artifact } from '../constants/artifact'
import { FlaggedProp } from '../../../helpers/types'

export interface Treasure {
  resources: Resources
  artifact: Artifact
}
const treasure = struct(
  //
  resources`resources`,
  artifact`artifact`,
)

export interface MessageAndTreasure {
  message: string
  treasure: Treasure
}
const messageAndTreasure = struct(
  //
  hommString`message`,
  treasure`treasure`,
)

export type Creature = {
  absodId?: number
  quantity: number
  disposition: Disposition
  neverFlees: boolean
  doesNotGrow: boolean
} & FlaggedProp<'hasMessageAndTreasure', 'messageAndTreasure', MessageAndTreasure>

export const creatureData = struct(
  when(isNotRoE, uint32)`absodId`,
  uint16`quantity`,
  enums(uint8, dispositioEnum)`disposition`,
  flag`hasMessageAndTreasure`,
  when(ctx`hasMessageAndTreasure`, messageAndTreasure)`messageAndTreasure`,
  flag`neverFlees`,
  flag`doesNotGrow`,
  skip(2),
)
