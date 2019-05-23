import { testMap } from './utils'
import { H3MFile } from '../src'
import { HeroData } from '../src/parsers/h3m/additionalInfo.bml'

describe('secondary scills', () => {
  testMap('secondary skills', 'secondary-skills.h3m', (map: H3MFile) => [
    map.objectDetails.entries
      .map(obj => {
        const heroData: HeroData = obj.body as HeroData
        if (heroData.hasSecondarySkills) return heroData.secondarySkills
        return null
      })
      .filter(Boolean)
  ])
})
