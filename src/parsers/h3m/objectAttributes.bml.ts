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
  enums,
  branch,
  computed,
  bytes,
} from 'binary-markup'
import { hommString } from './common.bml'
import { ObjectType, ObjectGroup, objectGroupEnum, objectTypeEnum } from './constants/object'
import { MetaType } from './constants/meta'
import { artifactEnum } from './constants/artifact'
import { getMetaType } from '../../helpers/objects'
import { creatureEnum } from './constants/creature'
import { alignmentEnum } from './constants/alignment'

export interface ObjectAttribute {
  header: string
  passable: number[]
  active: number[]
  allowedLandscapes: number
  landscapeGroup: number
  objectType: ObjectType
  objectSubType: number
  metaType: MetaType
  objectGroup: ObjectGroup
  above: number
}

const objectSubType = branch(
  ctx`objectType`,
  {
    [ObjectType.Artifact]: enums(uint32, artifactEnum),
    [ObjectType.Creature]: enums(uint32, creatureEnum),
    [ObjectType.RandomDwellingAlignment]: enums(uint32, alignmentEnum),
  },
  uint32,
)

const entry = struct(
  hommString`header`,
  // The passable and active arrays are bitfields representing an 8x6 tile
  // region where bit 1 marks passable and bit 0 impassable. Counting goes
  // from left to right downwards towards the bottom right corner. This means
  // that first bit in passable[0] is [x-7, y-5] from bottom right corner and
  // last bit in passable[5] is the bottom right corner.
  bytes(6)`passable`,
  bytes(6)`active`,
  uint16`allowedLandscapes`,
  uint16`landscapeGroup`,
  enums(uint32, objectTypeEnum)`objectType`,
  computed(context => {
    const type = context.get<ObjectType>(`objectType`)
    return getMetaType(type)
  })`metaType`,
  objectSubType`objectSubType`,
  enums(uint8, objectGroupEnum)`objectGroup`,
  uint8`above`,
  skip(16),
)

export interface ObjectAttributes {
  count: number
  entries: ObjectAttribute[]
}

export const objectAttributes = struct(
  //
  uint32`count`,
  array(entry, ctx`count`)`entries`,
)
