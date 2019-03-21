import {
  uint8,
  byte,
  uint16,
  uint32,
  array,
  struct,
  bitMask,
  ctx,
  skip,
  enums
} from 'binary-markup'
import { hommString } from './common.bml'
import { ObjectType, ObjectGroup, objectGroupEnum } from './constants/object'

const bitRegions = {
  0: 1,
  1: 2,
  2: 4,
  3: 8,
  4: 16,
  5: 32,
  6: 64,
  7: 128
}

const regionMask = bitMask(byte, bitRegions)

export interface ObjectAttribute {
  header: string
  passable: any
  active: any
  allowedLandscapes: number
  landscapeGroup: number
  objectType: ObjectType
  objectNumber: number
  objectGroup: ObjectGroup
  above: number
}

const entry = struct(
  hommString`header`,
  // The passable and active arrays are bitfields representing an 8x6 tile
  // region where bit 1 marks passable and bit 0 impassable. Counting goes
  // from left to right downwards towards the bottom right corner. This means
  // that first bit in passable[0] is [x-7, y-5] from bottom right corner and
  // last bit in passable[5] is the bottom right corner.
  array(regionMask, 6)`passable`,
  array(regionMask, 6)`active`,
  uint16`allowedLandscapes`,
  uint16`landscapeGroup`,
  uint32`objectType`,
  uint32`objectNumber`,
  enums(uint8, objectGroupEnum)`objectGroup`,
  uint8`above`,
  skip(16)
)

export interface ObjectAttributes {
  count: number
  entries: ObjectAttribute[]
}

export const objectAttributes = struct(
  //
  uint32`count`,
  array(entry, ctx`count`)`entries`
)
