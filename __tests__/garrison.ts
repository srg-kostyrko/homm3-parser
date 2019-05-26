import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('garrison', () => {
  testMap('garrison', 'garrison.h3m', (map: H3MFile) => map.objectDetails)
})
