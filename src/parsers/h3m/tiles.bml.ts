import { struct, enums, byte, bitMask, Context } from 'binary-markup'
import { terrainsEnum, riversEnum, roadsEnum, Terrain, River, Road } from './constants/tiles'
import { Info } from './info.bml'

export interface Tile {
  terrain: Terrain
  terrainSprite: number
  river: River
  riverSprite: number
  road: Road
  roadSprite: number
  mirror: {
    terrainY: boolean
    terrainX: boolean
    riverY: boolean
    riverX: boolean
    roadY: boolean
    roadX: boolean
  }
}

export const tile = struct(
  enums(byte, terrainsEnum)`terrain`,
  byte`terrainSprite`,
  enums(byte, riversEnum)`river`,
  byte`riverSprite`,
  enums(byte, roadsEnum)`road`,
  byte`roadSprite`,
  bitMask(byte, {
    terrainY: 1,
    terrainX: 2,
    riverY: 4,
    riverX: 8,
    roadY: 16,
    roadX: 32
  })`mirror`
)

export function calculateTiles(ctx: Context): number {
  const info = ctx.get<Info>('info')
  return info.mapSize * info.mapSize * (info.hasTwoLevels ? 2 : 1)
}
