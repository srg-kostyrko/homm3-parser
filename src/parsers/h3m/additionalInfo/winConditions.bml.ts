import { uint8, uint32, struct, flag, enums } from 'binary-markup'
import { artifact, creature, resource } from '../common.bml'
import { WinCondition } from '../constants/win'
import { HallLevel, CastleLevel, hallLevelEnum, castleLevelEnum } from '../constants'
import { Artifact } from '../constants/artifact'
import { Creature } from '../constants/creature'
import { Resource } from '../constants/resource'

interface WinConditionBase {
  allowNormalWin: boolean
  appliesToComputer: boolean
}

interface AquireArtifact extends WinConditionBase {
  type: Artifact
}
const aquireArtifact = struct(
  //
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  artifact`type`,
)

interface AccumulateCreatures extends WinConditionBase {
  type: Creature
  amount: number
}
const accumulateCreatures = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  creature`type`,
  uint32`amount`,
)

interface AccumulateResources extends WinConditionBase {
  resource: Resource
  amount: number
}
const accumulateResources = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  resource`resource`,
  uint32`amount`,
)

interface UpgradeTown extends WinConditionBase {
  x: number
  y: number
  z: number
  hallLevel: HallLevel
  castleLevel: CastleLevel
}
const upgradeTown = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
  enums(uint8, hallLevelEnum)`hallLevel`,
  enums(uint8, castleLevelEnum)`castleLevel`,
)
interface Position extends WinConditionBase {
  x: number
  y: number
  z: number
}
const position = struct(
  //
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
)

const flagWin = struct(
  //
  flag`allowNormalWin`,
  flag`appliesToComputer`,
)

interface TransportArtifact extends WinConditionBase {
  type: Artifact
  x: number
  y: number
  z: number
}
const transportArtifact = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  uint8`type`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
)

export type WinConditionData =
  | WinConditionBase
  | AquireArtifact
  | AccumulateCreatures
  | UpgradeTown
  | AccumulateResources
  | TransportArtifact
  | Position

export const winConditionsBranches = {
  [WinCondition.AcquireArtifact]: aquireArtifact,
  [WinCondition.AccumulateCreatures]: accumulateCreatures,
  [WinCondition.AccumulateResources]: accumulateResources,
  [WinCondition.UpgradeTown]: upgradeTown,
  [WinCondition.BuildGrail]: position,
  [WinCondition.DefeatHero]: position,
  [WinCondition.CaptureTown]: position,
  [WinCondition.DefeatHero]: position,
  [WinCondition.FlagDwellings]: flagWin,
  [WinCondition.FlagMines]: flagWin,
  [WinCondition.TransportArtifact]: transportArtifact,
}
