import { byte, uint16, uint32, bytes, array, when, struct, ctx, skip, flag } from 'binary-markup'

import { isSoD, isNotRoE, hommString, army, resources, owner, Army, Resources } from '../common.bml'
import { Building } from '../constants/buildings'
import { Player } from '../player.bml'
import { FlaggedProp } from '../../../helpers/types'
import { Formation } from '../constants/formation'
import { Spell, spellsMask } from '../constants/spell'
import { bitMasksArray } from '../../../helpers/objects'

const buildingsBits: [number, Building][][] = [
  [
    [1, Building.TownHall],
    [2, Building.CityHall],
    [4, Building.Capitol],
    [8, Building.Fort],
    [16, Building.Citadel],
    [32, Building.Castle],
    [64, Building.Tavern],
    [128, Building.Blacksmith],
  ],
  [
    [1, Building.Marketplace],
    [2, Building.ResourceSilo],
    [4, Building.ArtifactMerchants],
    [8, Building.MageGuild1],
    [16, Building.MageGuild2],
    [32, Building.MageGuild3],
    [64, Building.MageGuild4],
    [128, Building.MageGuild5],
  ],
  [
    [1, Building.Shipyard],
    [2, Building.Grail],
    [4, Building.Special1],
    [8, Building.Special2],
    [16, Building.Special3],
    [32, Building.Special4],
    [64, Building.Dwelling1],
    [128, Building.DwellingUp1],
  ],
  [
    [1, Building.Horde1],
    [2, Building.Dwelling2],
    [4, Building.DwellingUp2],
    [8, Building.Horde2],
    [16, Building.Dwelling3],
    [32, Building.Dwelling4],
    [64, Building.Horde3],
    [128, Building.Dwelling4],
  ],
  [
    [1, Building.DwellingUp4],
    [2, Building.Horde4],
    [4, Building.Dwelling5],
    [8, Building.DwellingUp5],
    [16, Building.Horde5],
    [32, Building.Dwelling6],
    [64, Building.DwellingUp6],
    [128, Building.Dwelling7],
  ],
  [[1, Building.DwellingUp7]],
]

const buildingsAdapter = bitMasksArray(bytes(6), buildingsBits)

export interface TownEvent {
  name: string
  message: string
  resources: Resources
  appliesToPlayers: boolean
  appliesToHuman?: boolean
  appliesToComputer: boolean
  firstOccurence: number
  subsequentOccurences: number
  buildings: Building[]
  creatureQuantities: number[]
}

const townEvent = struct(
  hommString`name`,
  hommString`message`,
  resources`resources`,
  flag`appliesToPlayers`,
  when(isSoD, flag)`appliesToHuman`,
  flag`appliesToComputer`,
  uint16`firstOccurence`,
  byte`subsequentOccurences`,
  skip(17),
  buildingsAdapter`buildings`,
  array(uint16, 7)`creatureQuantities`, // 1 for each generator
  skip(4),
)

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
  mustHaveSpells?: Spell[]
  mayHaveSpells: Spell[]
  eventCount: number
  events: TownEvent
  alignment: number
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasGarrison', 'garrison', Army> &
  BuildingsType

export const town = struct(
  when(isNotRoE, uint32)`absodId`,
  owner`owner`,
  byte`hasName`,
  when(ctx`hasName`, hommString)`name`,
  byte`hasGarrison`,
  when(ctx`hasGarrison`, army)`garrison`,
  byte`formation`,
  flag`buildingsCustomized`,
  when(
    ctx`buildingsCustomized`,
    struct(buildingsAdapter`built`, buildingsAdapter`disabled`),
  )`buildings`,
  when(ctx`buildingsCustomized`.eq(false), flag)`hasFort`,
  when(isNotRoE, spellsMask)`mustHaveSpells`,
  spellsMask`mayHaveSpells`,
  uint32`eventCount`,
  array(townEvent, ctx`eventCount`)`events`,
  when(isSoD, byte)`alignment`,
  skip(3),
)
