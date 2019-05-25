import { uint8, uint16, uint32, array, struct, when, ctx, skip, flag } from 'binary-markup'
import { isSoD, hommString, resources } from './common.bml'

const event = struct(
  hommString`name`,
  hommString`message`,
  resources`resources`,
  flag`appliesToPlayers`,
  when(isSoD, flag)`appliesToHuman`,
  flag`appliesToComputer`,
  uint16`firstOccurence`,
  uint8`subsequentOccurences`,
  skip(17),
)

export const events = struct(
  //
  uint32`count`,
  array(event, ctx`count`)`entries`,
)
