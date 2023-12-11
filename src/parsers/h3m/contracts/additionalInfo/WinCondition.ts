import { Artifact } from '../enums/Artifact'
import { Creature } from '../enums/Creature'
import { Resource } from '../enums/Resource'
import { HallLevel, CastleLevel } from '../../constants'
import { WinCondition } from '../enums/WinCondition'

interface WinConditionBase {
  allowNormalWin: boolean
  appliesToComputer: boolean
}

interface AcquireArtifact extends WinConditionBase {
  type: Artifact
}

interface AccumulateCreatures extends WinConditionBase {
  type: Creature
  amount: number
}

interface AccumulateResources extends WinConditionBase {
  resource: Resource
  amount: number
}

interface UpgradeTown extends WinConditionBase {
  x: number
  y: number
  z: number
  hallLevel: HallLevel
  castleLevel: CastleLevel
}

interface Position extends WinConditionBase {
  x: number
  y: number
  z: number
}

interface TransportArtifact extends WinConditionBase {
  type: Artifact
  x: number
  y: number
  z: number
}
interface WinConditionVariant<T extends WinCondition, V> {
  winCondition: T
  winConditionData: V
}

export type WinConditionData =
  | WinConditionVariant<WinCondition.AcquireArtifact, AcquireArtifact>
  | WinConditionVariant<WinCondition.AccumulateCreatures, AccumulateCreatures>
  | WinConditionVariant<WinCondition.AccumulateResources, AccumulateResources>
  | WinConditionVariant<WinCondition.UpgradeTown, UpgradeTown>
  | WinConditionVariant<
      | WinCondition.BuildGrail
      | WinCondition.DefeatHero
      | WinCondition.CaptureTown
      | WinCondition.DefeatHero,
      Position
    >
  | WinConditionVariant<WinCondition.FlagDwellings | WinCondition.FlagMines, WinConditionBase>
  | WinConditionVariant<WinCondition.TransportArtifact, TransportArtifact>
