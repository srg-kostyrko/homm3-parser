import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('pandora box', () => {
  testMap('pandora box', 'pandora-box.h3m', (map: H3MFile) => map.objectDetails)
})
