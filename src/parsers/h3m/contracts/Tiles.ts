import { Terrain } from './enums/Terrain'
import { River } from './enums/River'
import { Road } from './enums/Road'

export interface Tile {
  terrain: {
    type: Terrain
    sprite: number
  }
  river: {
    type: River
    sprite: number
  }
  road: {
    type: Road
    sprite: number
  }
  mirror: number
}
