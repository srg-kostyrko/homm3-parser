// Refer to h3m_description.english.txt for basic documentation.
// https://github.com/potmdehex/homm3tools/tree/master/h3m/h3mlib/h3m_structures/h3m_description.english.txt

import { uint32, enums, struct, array, endian, Endian } from 'binary-markup'

import { formatEnum, H3M_MAX_PLAYERS } from './constants'
import { info } from './info.bml'
import { player } from './player.bml'
import { additionalInfo } from './additionalInfo.bml'
import { tile, calculateTiles } from './tiles.bml'
import { objectAttributes } from './objectAttributes.bml'
import { objectDetails } from './objectDetails.bml'
import { events } from './events.bml'
import { H3MFile } from './contracts'

export const h3mFile = struct<H3MFile>(
  endian(Endian.LE),
  enums(uint32, formatEnum)`format`, // Map format
  info`info`,
  array(player, H3M_MAX_PLAYERS)`players`,
  additionalInfo`additionalInfo`,
  array(tile, calculateTiles)`tiles`,
  objectAttributes`objectAttributes`,
  objectDetails`objectDetails`,
  events`events`,
)
