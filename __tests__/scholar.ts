import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('scholar', () => {
  testMap('scholar', 'scholar.h3m', (map: H3MFile) => map.objectDetails)
})
