import { testMap } from './utils'
import { H3MFile, MetaType } from '../src'
import { MapFormat } from '../src/parsers/h3m/constants'

describe('town', () => {
  testMap('events', 'town-events.h3m', (map: H3MFile) => {
    if (map.format === MapFormat.SOD) {
      return map.objectDetails.entries
        .map(obj => {
          if (obj.body.type === MetaType.Town) {
            const town = obj.body.data
            return town.events
          }
          return null
        })
        .filter(Boolean)
    }
  })

  testMap('spells 1 - 3', 'town-spells-1-3.h3m', (map: H3MFile) => {
    if (map.format === MapFormat.SOD) {
      return map.objectDetails.entries
        .map(obj => {
          if (obj.body.type === MetaType.Town) {
            const town = obj.body.data
            return {
              name: town.hasName && town.name,
              spells: town.mustHaveSpells,
            }
          }
          return null
        })
        .filter(Boolean)
    }
  })

  testMap('spells 4 - 5', 'town-spells-4-5.h3m', (map: H3MFile) => {
    if (map.format === MapFormat.SOD) {
      return map.objectDetails.entries
        .map(obj => {
          if (obj.body.type === MetaType.Town) {
            const town = obj.body.data
            return {
              name: town.hasName && town.name,
              spells: town.mustHaveSpells,
            }
          }
          return null
        })
        .filter(Boolean)
    }
  })
})
