import {
  byte,
  uint16,
  uint32,
  bytes,
  array,
  when,
  struct,
  sequence,
  bitMask,
  ctx,
  Adapter,
  skip,
  createTag,
  flag
} from 'binary-markup'

import { isSoD, isNotRoE, hommString, army, resources, owner, Army, Resources } from '../common.bml'
import { Building } from '../constants/buildings'
import { Player } from '../player.bml'
import { FlaggedProp } from '../../../helpers/types'
import { Formation } from '../constants/formation'

interface TownEvent {
  name: string
  message: string
  resources: Resources
  appliesToPlayers: boolean
  appliesToHuman?: boolean
  appliesToComputer: boolean
  firstOccurence: number
  subsequentOccurences: number
  buildings: number[]
  creatureQuantities: number[]
}

const townEvent = struct(
  hommString`name`,
  hommString`message`,
  resources`resources`,
  byte`appliesToPlayers`,
  when(isSoD, byte)`appliesToHuman`,
  byte`appliesToComputer`,
  uint16`firstOccurence`,
  byte`subsequentOccurences`,
  skip(17),
  bytes(6)`buildings`,
  array(uint16, 7)`creatureQuantities`, // 1 for each generator
  skip(4)
)

const buildingsMask = sequence(
  bitMask(byte, {
    [Building.TownHall]: 1,
    [Building.CityHall]: 2,
    [Building.Capitol]: 4,
    [Building.Fort]: 8,
    [Building.Citadel]: 16,
    [Building.Castle]: 32,
    [Building.Tavern]: 64,
    [Building.Blacksmith]: 128
  }),
  bitMask(byte, {
    [Building.Marketplace]: 1,
    [Building.ResourceSilo]: 2,
    [Building.ArtifactMerchants]: 4,
    [Building.MageGuild1]: 8,
    [Building.MageGuild2]: 16,
    [Building.MageGuild3]: 32,
    [Building.MageGuild4]: 64,
    [Building.MageGuild5]: 128
  }),
  bitMask(byte, {
    [Building.Shipyard]: 1,
    [Building.Grail]: 2,
    [Building.Special1]: 4,
    [Building.Special2]: 8,
    [Building.Special3]: 16,
    [Building.Special4]: 32,
    [Building.Dwelling1]: 64,
    [Building.DwellingUp1]: 128
  }),
  bitMask(byte, {
    [Building.Horde1]: 1,
    [Building.Dwelling2]: 2,
    [Building.DwellingUp2]: 4,
    [Building.Horde2]: 8,
    [Building.Dwelling3]: 16,
    [Building.Dwelling4]: 32,
    [Building.Horde3]: 64,
    [Building.Dwelling4]: 128
  }),
  bitMask(byte, {
    [Building.DwellingUp4]: 1,
    [Building.Horde4]: 2,
    [Building.Dwelling5]: 4,
    [Building.DwellingUp5]: 8,
    [Building.Horde5]: 16,
    [Building.Dwelling6]: 32,
    [Building.DwellingUp6]: 64,
    [Building.Dwelling7]: 128
  }),
  bitMask(byte, {
    [Building.DwellingUp7]: 1
  })
)

interface BuildingsMaskType {
  [key: string]: boolean
}

class Buildings extends Adapter<BuildingsMaskType[], BuildingsMaskType> {
  public constructor(subTag = buildingsMask) {
    super(subTag)
  }

  public decode(data: BuildingsMaskType[]): BuildingsMaskType {
    return data.reduce(
      (acc, mask) => ({
        ...acc,
        ...mask
      }),
      {}
    )
  }

  public encode(): BuildingsMaskType[] {
    // noop
    return []
  }
}

const buildings = createTag(Buildings)

type BuildingsType =
  | {
      buildingsCustomized: false
    }
  | {
      buildingsCustomized: true
      buildings: {
        built: number[]
        disables: number[]
      }
      hasFort: boolean
    }

export type Town = {
  absodId: number
  owner: Player
  formation: Formation
  buildingsCustomized: boolean
  mustHaveSpells?: number[]
  mayHaveSpells: number[]
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
  when(ctx`buildingsCustomized`, struct(buildings`built`, buildings`disabled`))`buildings`,
  when(ctx`buildingsCustomized`.eq(false), byte)`hasFort`,
  when(isNotRoE, bytes(9))`mustHaveSpells`,
  bytes(9)`mayHaveSpells`,
  uint32`eventCount`,
  array(townEvent, ctx`eventCount`)`events`,
  when(isSoD, byte)`alignment`,
  skip(3)
)
