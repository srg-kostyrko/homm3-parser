import { ObjectType, objectTypeToMeta } from '../parsers/h3m/enums/object'
import { MetaType } from '../parsers/h3m/contracts/enums/MetaType'
import { createAdapter, TagProducer, TagOrWrapper } from 'binary-markup'

export function getMetaType(type: ObjectType): MetaType {
  if (type in objectTypeToMeta) {
    return objectTypeToMeta[type]
  }
  return MetaType.None
}

export const bitMasksArray = <T>(
  tag: TagOrWrapper<number[]>,
  bitGroups: [number, T][][],
): TagProducer<T[]> =>
  createAdapter<number[], T[]>(
    tag,
    (data: number[]) => {
      return data.reduce((acc: T[], mask, index) => {
        const bits = bitGroups[index]
        for (const [bit, skill] of bits) {
          if (mask & bit) {
            acc.push(skill)
          }
        }
        return acc
      }, [])
    },
    (skills: T[]) => {
      return bitGroups.map(bits => {
        let mask = 0
        for (const [bit, skill] of bits) {
          if (skills.includes(skill)) {
            mask |= bit
          }
        }
        return mask
      })
    },
  )
