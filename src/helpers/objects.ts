import { ObjectType, objectTypeToMeta } from '../parsers/h3m/constants/object'
import { MetaType } from '../parsers/h3m/constants/meta'

export function getMetaType(type: ObjectType): MetaType {
  if (type in objectTypeToMeta) {
    return objectTypeToMeta[type]
  }
  return MetaType.None
}
