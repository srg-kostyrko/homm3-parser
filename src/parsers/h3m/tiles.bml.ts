import { struct, enums, byte, bitMask, Context, TagProducer } from 'binary-markup'
import { terrainsEnum, riversEnum, roadsEnum, Terrain, River, Road } from './constants/tiles'
import { Info } from './info.bml'

// terrainY: 1,
// terrainX: 2,
// riverY: 4,
// riverX: 8,
// roadY: 16,
// roadX: 32,

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

const tilePart = <T extends string>(
  typeEnum: Record<T, number>,
): TagProducer<{ type: T; sprite: number }> =>
  struct(
    //
    enums(byte, typeEnum)`type`,
    byte`sprite`,
  )

export const tile = struct(
  tilePart(terrainsEnum)`terrain`,
  tilePart(riversEnum)`river`,
  tilePart(roadsEnum)`road`,
  byte`mirror`,
)

export function calculateTiles(ctx: Context): number {
  const info = ctx.get<Info>('info')
  return info.mapSize * info.mapSize * (info.hasTwoLevels ? 2 : 1)
}
