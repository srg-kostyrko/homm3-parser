import { testMap } from './helpers/utils'
import { H3MFile } from '../src'

describe('random map', () => {
  const getter = (x: H3MFile): H3MFile => x
  testMap('SoD random map', 'random-SoD.h3m', getter)
  testMap('AB random map', 'random-AB.h3m', getter)
  testMap('RoE random map', 'random-RoE.h3m', getter)
})
