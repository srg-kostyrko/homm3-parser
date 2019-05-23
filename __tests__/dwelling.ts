import { testMap } from './utils'
import { H3MFile } from '../src'

describe('dwelling', () => {
  testMap('dwelling', 'dwelling.h3m', (map: H3MFile) => map.objectDetails)
})
