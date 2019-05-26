import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('artifacts', () => {
  testMap('artifacts', 'artifacts.h3m', (map: H3MFile) => map.objectDetails)
})
