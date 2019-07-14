import { Terrain } from './enums/Terrain'
import { River } from './enums/River'
import { Road } from './enums/Road'
import { TileMirror } from './enums/TileMirror'

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
  mirror: TileMirror[]
}
