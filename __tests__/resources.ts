import { testMap } from './utils'
import { H3MFile } from '../src'

describe('resources', () => {
  testMap('resources', 'resources.h3m', (map: H3MFile) => map.objectDetails)
})
