import {
  struct,
  cString,
  endian,
  Endian,
  constant,
  skip,
  uint32,
  seek,
  array,
  ctx,
  pointer,
  when,
  computed,
  bytes
} from 'binary-markup'

const file = struct(
  //
  cString()`name`,
  skip(context => 16 - context.get<string>('name').length + 1),
  uint32`offset`,
  uint32`size`,
  uint32,
  uint32`csize`,
  computed(ctx`csize`.neq(0))`compressed`,
  pointer(ctx`offset`, when(ctx`compressed`, bytes(ctx`csize`), bytes(ctx`size`)))`content`
)

export const lodFile = struct(
  //
  endian(Endian.LE),
  constant(cString(), 'LOD'),
  seek(8),
  uint32`count`,
  seek(92),
  array(file, ctx`count`)`files`
)
