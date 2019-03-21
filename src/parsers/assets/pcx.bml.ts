import { uint32, bytes, struct, when, array, ctx, greedyArray, endian, Endian } from 'binary-markup'

const rgb = bytes(3)

export const pcxFile = struct(
  endian(Endian.LE),
  uint32`size`,
  uint32`width`,
  uint32`height`,
  when(
    context => context.get('size') === context.get<number>('width') * context.get<number>('height'),
    struct(
      //
      bytes(ctx`size`)`pixels`,
      array(rgb, 256)`palette`
    )
  )`with_palette`,
  when(
    //
    context =>
      context.get('size') === context.get<number>('width') * context.get<number>('height') * 3,
    greedyArray(rgb)
  )`rgb`
)
