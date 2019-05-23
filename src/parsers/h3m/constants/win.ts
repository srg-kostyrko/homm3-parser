export enum WinCondition {
  AcquireArtifact = 'AcquireArtifact',
  AccumulateCreatures = 'AccumulateCreatures',
  AccumulateResources = 'AccumulateResources',
  UpgradeTown = 'UpgradeTown',
  BuildGrail = 'BuildGrail',
  DefeatHero = 'DefeatHero',
  CaptureTown = 'CaptureTown',
  DefeatMonster = 'DefeatMonster',
  FlagDwellings = 'FlagDwellings',
  FlagMines = 'FlagMines',
  TransportArtifact = 'TransportArtifact',
}

export const winConditionsEnum = {
  [WinCondition.AcquireArtifact]: 0x00,
  [WinCondition.AccumulateCreatures]: 0x01,
  [WinCondition.AccumulateResources]: 0x02,
  [WinCondition.UpgradeTown]: 0x03,
  [WinCondition.BuildGrail]: 0x04,
  [WinCondition.DefeatHero]: 0x05,
  [WinCondition.CaptureTown]: 0x06,
  [WinCondition.DefeatMonster]: 0x07,
  [WinCondition.FlagDwellings]: 0x08,
  [WinCondition.FlagMines]: 0x09,
  [WinCondition.TransportArtifact]: 0x0a,
}
