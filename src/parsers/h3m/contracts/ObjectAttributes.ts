import { ObjectType, ObjectGroup } from '../enums/object'
import { Artifact } from './enums/Artifact'
import { Creature } from './enums/Creature'
import { Alignment } from './enums/Alignment'
import { MetaType } from './enums/MetaType'

export type ObjectCategory =
  | {
      objectType: ObjectType.Artifact
      objectSubType: Artifact
    }
  | {
      objectType: ObjectType.Creature
      objectSubType: Creature
    }
  | {
      objectType: ObjectType.RandomDwellingAlignment
      objectSubType: Alignment
    }
  | {
      objectType: ObjectType
      objectSubType: number
    }

export type ObjectAttribute = {
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
} & ObjectCategory

export interface ObjectAttributes {
  count: number
  entries: ObjectAttribute[]
}
