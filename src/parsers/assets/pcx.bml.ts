import { uint32, bytes, struct, when, array, ctx, greedyArray, endian, Endian } from 'binary-markup'

const bgr = bytes(3)

type BGR = [number, number, number]

export interface PcxFile {
  size: number
  width: number
  height: number
  with_palette?: {
    pixels: number[]
    palette: BGR[]
  }
  bgr?: BGR[]
}

export const pcxFile = struct<PcxFile>(
  endian(Endian.LE),
  uint32`size`,
  uint32`width`,
  uint32`height`,
  when(
    context => context.get('size') === context.get<number>('width') * context.get<number>('height'),
    struct(
      //
      bytes(ctx`size`)`pixels`,
      array(bgr, 256)`palette`,
    ),
  )`with_palette`,
  when(
    //
    context =>
      context.get('size') === context.get<number>('width') * context.get<number>('height') * 3,
    greedyArray(bgr),
  )`bgr`,
)
