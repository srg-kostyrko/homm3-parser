import { uint8, uint32, array, struct, computed, ctx, skip, tap } from 'binary-markup'
import { objectBody, ObjectBody } from './objectDetails/body.bml'
import { ObjectAttribute, ObjectAttributes } from './objectAttributes.bml'

const attributes = computed(context => {
  const index = context.get<number>('oaIndex')
  const objectAttributes = context.get<ObjectAttributes>('objectAttributes').entries
  return objectAttributes[index]
})

export interface MapObject {
  x: number
  y: number
  z: number
  oaIndex: number
  attribute: ObjectAttribute
  body: ObjectBody
}

const entry = struct(
  //
  uint8`x`,
  uint8`y`,
  uint8`z`,
  uint32`oaIndex`,
  attributes`attributes`,
  skip(5),
  objectBody`body`,
)

export interface ObjectDetails {
  count: number
  entries: MapObject[]
}

export const objectDetails = struct(
  //
  uint32`count`,
  array(entry, ctx`count`)`entries`,
)
