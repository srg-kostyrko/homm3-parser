import { uint8, uint32, array, struct, computed, ctx, skip } from 'binary-markup'
import { objectBody, ObjectBody } from './object_details/body.bml'
import { ObjectAttribute, ObjectAttributes } from './object_attributes.bml'
import { getMetaType } from '../../helpers/objects'
import { MetaType } from './constants/meta'

const attributes = computed(context => {
  const index = context.get<number>('oa_index')
  const objectAttributes = context.get<ObjectAttributes>('object_attributes').entries
  return objectAttributes[index]
})

const type = computed(context => {
  const oa = context.get<ObjectAttribute>('attributes')
  return getMetaType(oa.objectType)
})

export interface MapObject {
  x: number
  y: number
  z: number
  oaIndex: number
  attributes: ObjectAttribute
  type: MetaType
  body: ObjectBody
}

const entry = struct(
  //
  uint8`x`,
  uint8`y`,
  uint8`z`,
  uint32`oa_index`,
  skip(5),
  attributes`attributes`,
  type`type`,
  objectBody`body`
)

export interface ObjectDetails {
  count: number
  entries: MapObject[]
}

export const objectDetails = struct(
  //
  uint32`count`,
  array(entry, ctx`count`)`entries`
)
