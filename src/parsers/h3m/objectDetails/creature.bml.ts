import { uint8, uint16, uint32, enums, flag, when, ctx, skip, struct } from 'binary-markup'
import { isNotRoE, resources, artifact, hommString } from '../common.bml'
import { dispositioEnum } from '../enums/disposition'

const treasure = struct(
  //
  resources`resources`,
  artifact`artifact`,
)
const messageAndTreasure = struct(
  //
  hommString`message`,
  treasure`treasure`,
)

export const creatureData = struct(
  when(isNotRoE, uint32)`absodId`,
  uint16`quantity`,
  enums(uint8, dispositioEnum)`disposition`,
  flag`hasMessageAndTreasure`,
  when(ctx`hasMessageAndTreasure`, messageAndTreasure)`messageAndTreasure`,
  flag`neverFlees`,
  flag`doesNotGrow`,
  skip(2),
)
