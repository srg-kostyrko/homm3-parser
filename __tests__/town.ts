import { testMap } from './utils'
import { H3MFile } from '../src'
import { Town } from '../src/parsers/h3m/objectDetails/town.bml'

describe('town', () => {
  testMap('events', 'town-events.h3m', (map: H3MFile) =>
    map.objectDetails.entries.map(obj => {
      const town = obj.body as Town
      return town.events
    }),
  )

  testMap('spells 1 - 3', 'town-spells-1-3.h3m', (map: H3MFile) =>
    map.objectDetails.entries.map(obj => {
      const town = obj.body as Town
      return {
        name: town.hasName && town.name,
        spells: town.mustHaveSpells,
      }
    }),
  )

  testMap('spells 4 - 5', 'town-spells-4-5.h3m', (map: H3MFile) =>
    map.objectDetails.entries.map(obj => {
      const town = obj.body as Town
      return {
        name: town.hasName && town.name,
        spells: town.mustHaveSpells,
      }
    }),
  )
})
