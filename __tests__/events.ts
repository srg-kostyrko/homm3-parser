import { testMap } from './utils'
import { H3MFile } from '../src'

describe('events', () => {
  testMap('events', 'events.h3m', (map: H3MFile) => map.objectDetails)
})
