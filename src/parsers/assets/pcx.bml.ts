import {
  uint32,
  bytes,
  struct,
  when,
  array,
  ctx,
  greedyArray,
  endian,
  Endian,
  computed,
} from 'binary-markup'
import { FlaggedProp } from '../../helpers/types'

const bgr = bytes(3)

type BGR = [number, number, number]

export type PcxFile = {
  size: number
  width: number
  height: number
  bgr?: BGR[]
} & FlaggedProp<
  'hasPalette',
  'paletteData',
  {
    pixels: number[]
    palette: BGR[]
  }
> &
  FlaggedProp<'hasBgr', 'bgr', BGR[]>

export const pcxFile = struct<PcxFile>(
  endian(Endian.LE),
  uint32`size`,
  uint32`width`,
  uint32`height`,
  computed(
    (context): boolean =>
      context.get('size') === context.get<number>('width') * context.get<number>('height'),
  )`hasPalette`,
  when(
    ctx`hasPalette`,
    struct(
      //
      bytes(ctx`size`)`pixels`,
      array(bgr, 256)`palette`,
    ),
  )`paletteData`,
  computed(
    (context): boolean =>
      context.get('size') === context.get<number>('width') * context.get<number>('height') * 3,
  )`hasBgr`,
  when(
    //
    ctx`hasBgr`,
    greedyArray(bgr),
  )`bgr`,
)
