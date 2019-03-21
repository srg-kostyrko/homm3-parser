import { uint8, uint32, struct, flag } from 'binary-markup'
import { artifact, creature, resource } from '../common.bml'
import { WinCondition } from '../constants/win'
import { HallLevel, CastleLevel } from '../constants'
import { Artifact } from '../constants/artifact'
import { Creature } from '../constants/creature'
import { Resource } from '../constants/resource'

interface WinConditionBase {
  allow_normal_win: boolean
  applies_to_computer: boolean
}

interface AquireArtifact extends WinConditionBase {
  type: Artifact
}
const aquireArtifact = struct(
  //
  flag`allow_normal_win`,
  flag`applies_to_computer`,
  artifact`type`
)

interface AccumulateCreatures extends WinConditionBase {
  type: Creature
  amount: number
}
const accumulateCreatures = struct(
  uint8`allow_normal_win`,
  uint8`applies_to_computer`,
  creature`type`,
  uint32`amount`
)

interface AccumulateResources extends WinConditionBase {
  resource: Resource
  amount: number
}
const accumulateResources = struct(
  uint8`allow_normal_win`,
  uint8`applies_to_computer`,
  resource`resource`,
  uint32`amount`
)

interface UpgradeTown extends WinConditionBase {
  x: number
  y: number
  z: number
  hall_level: HallLevel
  castle_level: CastleLevel
}
const upgradeTown = struct(
  uint8`allow_normal_win`,
  uint8`applies_to_computer`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
  uint8`hall_level`, // 0-Town, 1-City,    2-Capitol
  uint8`castle_level` // 0-Fort, 1-Citadel, 2-Castle
)
interface Position extends WinConditionBase {
  x: number
  y: number
  z: number
}
const position = struct(
  uint8`allow_normal_win`,
  uint8`applies_to_computer`,
  uint8`x`,
  uint8`y`,
  uint8`z`
)

const flagWin = struct(uint8`allow_normal_win`, uint8`applies_to_computer`)

interface TransportArtifact extends WinConditionBase {
  type: Artifact
  x: number
  y: number
  z: number
}
const transportArtifact = struct(
  uint8`allow_normal_win`,
  uint8`applies_to_computer`,
  uint8`type`,
  uint8`x`,
  uint8`y`,
  uint8`z`
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
  [WinCondition.TransportArtifact]: transportArtifact
}
