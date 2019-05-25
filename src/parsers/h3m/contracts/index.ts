import { MapFormat } from '../constants'
import { Tile } from './Tiles'
import { InfoRoE, Info } from './Info'
import { PlayerData, PlayerDataAb, PlayerDataRoE } from './PlayerData'
import { AdditionalInfoAB, AdditionalInfoBase, AdditionalInfo } from './AdditionalInfo'
import { ObjectAttributes } from './ObjectAttributes'
import { Events, EventsABRoE } from './Events'
import { ObjectDetails, ObjectDetailsRoE, ObjectDetailsAB } from './ObjectDetails'

export type H3MFile =
  | {
      format: MapFormat.ROE
      info: InfoRoE
      players: PlayerDataRoE[]
      additionalInfo: AdditionalInfoBase
      objectAttributes: ObjectAttributes
      tiles: Tile[]
      objectDetails: ObjectDetailsRoE
      events: EventsABRoE
    }
  | {
      format: MapFormat.AB
      info: Info
      players: PlayerDataAb[]
      additionalInfo: AdditionalInfoAB
      objectAttributes: ObjectAttributes
      tiles: Tile[]
      objectDetails: ObjectDetailsAB
      events: EventsABRoE
    }
  | {
      format: MapFormat.SOD
      info: Info
      players: PlayerData[]
      additionalInfo: AdditionalInfo
      objectAttributes: ObjectAttributes
      tiles: Tile[]
      objectDetails: ObjectDetails
      events: Events
    }

export * from './enums'
export * from './AdditionalInfo'
export * from './common'
export * from './Info'
export * from './ObjectAttributes'
export * from './ObjectDetails'
export * from './PlayerData'
export * from './Tiles'
