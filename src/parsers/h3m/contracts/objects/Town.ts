import { Resources, Army } from '../common'
import { Building } from '../enums/Building'
import { Omit, FlaggedProp } from '../../../../helpers/types'
import { Player } from '../enums/Player'
import { Formation } from '../enums/Formation'
import { Spell } from '../enums/Spell'

export interface TownEvent {
  name: string
  message: string
  resources: Resources
  appliesToPlayers: boolean
  appliesToHuman: boolean
  appliesToComputer: boolean
  firstOccurence: number
  subsequentOccurences: number
  buildings: Building[]
  creatureQuantities: number[]
}

export type TownEventABRoE = Omit<TownEvent, 'appliesToHuman'>

export type BuildingsType =
  | {
      buildingsCustomized: false
    }
  | {
      buildingsCustomized: true
      buildings: {
        built: Building[]
        disables: Building[]
      }
      hasFort: boolean
    }

export type Town = {
  absodId: number
  owner: Player
  formation: Formation
  buildingsCustomized: boolean
  mustHaveSpells: Spell[]
  mayHaveSpells: Spell[]
  eventCount: number
  events: TownEvent
  alignment: number
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasGarrison', 'garrison', Army> &
  BuildingsType

export type TownAB = {
  absodId: number
  owner: Player
  formation: Formation
  buildingsCustomized: boolean
  mustHaveSpells: Spell[]
  mayHaveSpells: Spell[]
  eventCount: number
  events: TownEventABRoE
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasGarrison', 'garrison', Army> &
  BuildingsType

export type TownRoE = {
  owner: Player
  formation: Formation
  buildingsCustomized: boolean
  mayHaveSpells: Spell[]
  eventCount: number
  events: TownEventABRoE
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasGarrison', 'garrison', Army> &
  BuildingsType
