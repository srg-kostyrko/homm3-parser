import { testMap } from './utils'
import { H3MFile } from '../src'
import { WitchHut } from '../src/parsers/h3m/objectDetails/witchHut.bml'

describe('witch hut', () => {
  testMap('witch hut', 'witch-hut.h3m', (map: H3MFile) =>
    map.objectDetails.entries.map(obj => {
      const witchHut = obj.body as WitchHut
      return {
        x: obj.x,
        y: obj.y,
        skills: witchHut.potentialSkills,
      }
    }),
  )
})
