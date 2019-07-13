import { struct, enums, byte, Context, TagProducer } from 'binary-markup'
import { terrainsEnum, riversEnum, roadsEnum } from './enums/tiles'
import { Info } from './contracts/Info'

// terrainY: 1,
// terrainX: 2,
// riverY: 4,
// riverX: 8,
// roadY: 16,
// roadX: 32,

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
