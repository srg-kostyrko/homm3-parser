import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('seers hut', () => {
  testMap('seers hut', 'seers-hut.h3m', (map: H3MFile) => map.objectDetails)
})
