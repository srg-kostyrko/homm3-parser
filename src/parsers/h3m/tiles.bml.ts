import { struct, enums, byte, Context, TagProducer, bytes } from 'binary-markup'
import { terrainsEnum, riversEnum, roadsEnum } from './enums/tiles'
import { Info } from './contracts/Info'
import { TileMirror } from './contracts/enums/TileMirror'
import { bitMasksArray } from '../../helpers/objects'

const mirrorBits: [number, TileMirror][][] = [
  [
    [1, TileMirror.TerrainVertical],
    [2, TileMirror.TerrainHorizontal],
    [4, TileMirror.RiverVertical],
    [8, TileMirror.RiverHorizontal],
    [16, TileMirror.RoadVertical],
    [32, TileMirror.RoadHorizontal],
  ],
]

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
  bitMasksArray(bytes(1), mirrorBits)`mirror`,
)

export function calculateTiles(ctx: Context): number {
  const info = ctx.get<Info>('info')
  return info.mapSize * info.mapSize * (info.hasTwoLevels ? 2 : 1)
}
