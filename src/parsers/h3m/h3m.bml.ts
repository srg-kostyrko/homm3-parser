// Refer to h3m_description.english.txt for basic documentation.
// https://github.com/potmdehex/homm3tools/tree/master/h3m/h3mlib/h3m_structures/h3m_description.english.txt

import { uint32, enums, struct, array, endian, Endian } from 'binary-markup'

import { formatEnum, H3M_MAX_PLAYERS, MapFormat } from './constants'
import { info, Info } from './info.bml'
import { Player, player } from './player.bml'
import { additionalInfo, AdditionalInfo } from './additionalInfo.bml'
import { tile, Tile, calculateTiles } from './tiles.bml'
import { objectAttributes, ObjectAttributes } from './objectAttributes.bml'
import { objectDetails, ObjectDetails } from './objectDetails.bml'
import { events, Events } from './events.bml'

export interface H3MFile {
  format: MapFormat
  info: Info
  players: Player[]
  additionalInfo: AdditionalInfo
  objectAttributes: ObjectAttributes
  tiles: Tile[]
  objectDetails: ObjectDetails
  events: Events
}

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
