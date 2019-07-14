import {
  byte,
  bytes,
  int32,
  uint16,
  uint32,
  struct,
  computed,
  array,
  ctx,
  string,
  pointer,
  branch,
  repeatWhile,
  endian,
  Endian,
  Context,
  skip,
} from 'binary-markup'

const rgb = bytes(3)

type RGB = [number, number, number]

const filePointer = (context: Context): number => {
  const index = context.get<number>('index')
  const offsets = context.get<number[]>('offsets')
  context.set('offset', offsets[index])
  return offsets[index]
}

const linePointer = (context: Context): number => {
  const index = context.get<number>('index')
  const offsets = context.get<number[]>('lineOffsets')
  const offset = context.get<number>('offset')
  return offset + 32 + offsets[index]
}

interface Line {
  content: number[]
  [key: string]: unknown
}

const repeatCondition = (context: Context, _el: unknown, _index: unknown, list: Line[]): boolean =>
  list.reduce((acc: number, el: { content: number[] }): number => acc + el.content.length, 0) <
  context.get<number>('width')

const codeFragment = struct<Line>(
  byte`code`,
  byte`length`,
  branch(
    ctx`code`,
    {
      0xff: bytes((context): number => context.get<number>('length') + 1),
    },
    computed((context): number[] =>
      new Array<number>(context.get<number>('length') + 1).fill(context.get<number>('code')),
    ),
  )`content`,
)

const segmentFragment = struct<Line>(
  byte`segment`,
  computed((context): number => context.get<number>('segment') >> 5)`code`,
  computed((context): number => (context.get<number>('segment') & 0x1f) + 1)`length`,
  branch(
    ctx`code`,
    {
      7: bytes(ctx`length`),
    },
    computed((context): number[] =>
      new Array<number>(context.get('length')).fill(context.get<number>('code')),
    ),
  )`content`,
)

const lineReducer = (acc: number[], list: Line[]): number[] =>
  acc.concat(
    //
    list.reduce((a: number[], l: Line): number[] => a.concat(l.content), []),
  )

interface File {
  size: number
  fullWidth: number
  fullHeight: number
  width: number
  height: number
  left: number
  top: number
  pixels: number[]
}

const file = struct(
  uint32`size`,
  uint32`encoding`,
  uint32`fullWidth`,
  uint32`fullHeight`,
  uint32`width`,
  uint32`height`,
  int32`left`,
  int32`top`,

  branch(ctx`encoding`, {
    0: bytes((context): number => context.get<number>('width') * context.get<number>('height')),
    1: struct(
      array(uint32, ctx`height`)`lineOffsets`,
      array(
        //
        pointer(linePointer, repeatWhile(codeFragment, repeatCondition)),
        ctx`height`,
      )`lines`,
    ),
    2: struct(
      array(uint16, ctx`height`)`lineOffsets`,
      skip(2),
      array(
        pointer(linePointer, repeatWhile(segmentFragment, repeatCondition)),
        ctx`height`,
      )`lines`,
    ),
    3: struct(
      array(
        array(uint16, (context): number => Math.ceil(context.get<number>('width') / 32)),
        ctx`height`,
      )`lineOffsets`,
      array(
        array(repeatWhile(segmentFragment, repeatCondition), (context): number =>
          Math.ceil(context.get<number>('width') / 32),
        )`line`,
        ctx`height`,
      )`lines`,
    ),
  })`content`,
  branch(ctx`encoding`, {
    0: computed(ctx<number[]>`content`),
    1: computed((context): number[] =>
      context.get<Line[][]>('content.lines').reduce(lineReducer, []),
    ),
    2: computed((context): number[] =>
      context.get<Line[][]>('content.lines').reduce(lineReducer, []),
    ),
    3: computed((context): number[] =>
      context.get<Line[][][]>('content.lines').reduce(
        //
        (acc: number[], line): number[] =>
          acc.concat(
            //
            line.reduce(lineReducer, []),
          ),
        [],
      ),
    ),
  })`pixels`,
)

interface Block {
  blockId: number
  entriesCount: number
  filenames: string[]
  files: File[]
}

const block = struct(
  uint32`blockId`,
  uint32`entriesCount`,
  uint32`unknown`,
  uint32`unknown`,
  array(string(13), ctx`entriesCount`)`filenames`,
  array(uint32, ctx`entriesCount`)`offsets`,
  array(pointer(filePointer, file), ctx`entriesCount`)`files`,
)

export interface DefFile {
  width: number
  height: number
  blockCount: number
  palette: RGB[]
  blocks: Block[]
}

export const defFile = struct<DefFile>(
  endian(Endian.LE),
  uint32`type`,
  uint32`width`,
  uint32`height`,
  uint32`blockCount`,
  array(rgb, 256)`palette`,
  array(block, ctx`blockCount`)`blocks`,
)
