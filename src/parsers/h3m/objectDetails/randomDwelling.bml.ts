import { struct, uint8, uint32, uint16, ctx, when, enums, array } from 'binary-markup'
import { playerEnum } from '../enums/player'
import { bitMasksArray } from '../../../helpers/objects'
import { Alignment } from '../contracts/enums/Alignment'

const alignmentBits: [number, Alignment][][] = [
  [
    [1, Alignment.Castle],
    [2, Alignment.Rampart],
    [4, Alignment.Tower],
    [8, Alignment.Inferno],
    [16, Alignment.Necropolis],
    [32, Alignment.Dungeon],
    [64, Alignment.Stronghold],
    [128, Alignment.Fortress],
    [256, Alignment.Conflux],
  ],
]

const alignmentMask = bitMasksArray(array(uint16, 1), alignmentBits)

export const randomDwelling = struct(
  enums(uint32, playerEnum)`owner`,
  struct(
    //
    uint32`castleAbsodId`,
    when(ctx`castleAbsodId`.eq(0), alignmentMask)`alignments`,
  )`castle`,
  struct(uint8`min`, uint8`max`)`level`,
)

export const randomDwellingAlignment = struct(
  //
  enums(uint32, playerEnum)`owner`,
  struct(uint8`min`, uint8`max`)`level`,
)

export const randomDwellingLevel = struct(
  enums(uint32, playerEnum)`owner`,
  struct(
    //
    uint32`castleAbsodId`,
    when(ctx`castleAbsodId`.eq(0), alignmentMask)`alignments`,
  )`castle`,
)
