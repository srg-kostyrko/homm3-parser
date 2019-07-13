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
  bytes,
} from 'binary-markup'

const file = struct(
  //
  cString()`name`,
  skip((context): number => 16 - context.get<string>('name').length + 1),
  uint32`offset`,
  uint32`size`,
  uint32,
  uint32`csize`,
  computed(ctx`csize`.neq(0))`compressed`,
  pointer(ctx`offset`, when(ctx`compressed`, bytes(ctx`csize`), bytes(ctx`size`)))`content`,
)

interface LodFileEntry {
  name: string
  size: number
  csize: number
  compressed: boolean
  content: number[]
}

export interface LodFile {
  count: number
  entries: LodFileEntry[]
}

export const lodFile = struct(
  //
  endian(Endian.LE),
  constant(cString(), 'LOD'),
  seek(8),
  uint32`count`,
  seek(92),
  array(file, ctx`count`)`entries`,
)
