import { uint8, uint32, struct, flag, enums } from 'binary-markup'
import { artifact, creature, resource } from '../common.bml'
import { hallLevelEnum, castleLevelEnum } from '../constants'
import { WinCondition } from '../contracts/enums/WinCondition'

const acquireArtifact = struct(
  //
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  artifact`type`,
)

const accumulateCreatures = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  creature`type`,
  uint32`amount`,
)

const accumulateResources = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  resource`resource`,
  uint32`amount`,
)

const upgradeTown = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
  enums(uint8, hallLevelEnum)`hallLevel`,
  enums(uint8, castleLevelEnum)`castleLevel`,
)
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

const transportArtifact = struct(
  flag`allowNormalWin`,
  flag`appliesToComputer`,
  uint8`type`,
  uint8`x`,
  uint8`y`,
  uint8`z`,
)

export const winConditionsBranches = {
  [WinCondition.AcquireArtifact]: acquireArtifact,
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
