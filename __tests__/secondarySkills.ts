import { testMap } from './utils'
import { H3MFile, MetaType } from '../src'
import { MapFormat } from '../src/parsers/h3m/constants'

describe('secondary scills', () => {
  testMap('secondary skills', 'secondary-skills.h3m', (map: H3MFile) => {
    if (map.format === MapFormat.SOD) {
      return map.objectDetails.entries
        .map(obj => {
          if (obj.body.type === MetaType.Hero) {
            const heroData = obj.body.data
            if (heroData.hasSecondarySkills) return heroData.secondarySkills
          }
          return null
        })
        .filter(Boolean)
    }
  })
})
