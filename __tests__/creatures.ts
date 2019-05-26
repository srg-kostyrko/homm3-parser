import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('creatures', () => {
  testMap('creatures', 'creatures.h3m', (map: H3MFile) => map.objectDetails)
})
