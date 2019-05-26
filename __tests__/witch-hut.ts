import { testMap } from './helpers/utils'
import { H3MFile, MetaType } from '../src'
import { MapFormat } from '../src/parsers/h3m/constants'

describe('witch hut', () => {
  testMap('witch hut', 'witch-hut.h3m', (map: H3MFile) => {
    if (map.format === MapFormat.SOD) {
      return map.objectDetails.entries.map(obj => {
        if (obj.body.type === MetaType.WitchHut) {
          const witchHut = obj.body.data
          return {
            x: obj.x,
            y: obj.y,
            skills: witchHut.potentialSkills,
          }
        }
        return null
      })
    }
  })
})
