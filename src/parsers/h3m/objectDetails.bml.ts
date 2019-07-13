import { uint8, uint32, array, struct, computed, ctx, skip } from 'binary-markup'
import { objectBody } from './objectDetails/body.bml'
import { ObjectAttributes, ObjectAttribute } from './contracts/ObjectAttributes'

const attributes = computed(
  (context): ObjectAttribute => {
    const index = context.get<number>('oaIndex')
    const objectAttributes = context.get<ObjectAttributes>('objectAttributes').entries
    return objectAttributes[index]
  },
)

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

export const objectDetails = struct(
  //
  uint32`count`,
  array(entry, ctx`count`)`entries`,
)
