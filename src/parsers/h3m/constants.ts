export const H3M_MAX_PLAYERS = 8

export enum MapFormat {
  ROE = 'RoE',
  AB = 'AB',
  SOD = 'SoD',
  CHR = 'Chr',
  WOG = 'WoG',
}

export const formatEnum = {
  [MapFormat.ROE]: 0x0000000e,
  [MapFormat.AB]: 0x00000015,
  [MapFormat.SOD]: 0x0000001c,
  [MapFormat.CHR]: 0x0000001d,
  [MapFormat.WOG]: 0x00000033,
}

export enum Difficulty {
  Easy = 'Easy',
  Normal = 'Normal',
  Hard = 'Hard',
  Expert = 'Expert',
  Impossible = 'Impossible',
}

export const difficultyEnum = {
  [Difficulty.Easy]: 0,
  [Difficulty.Normal]: 1,
  [Difficulty.Hard]: 2,
  [Difficulty.Expert]: 3,
  [Difficulty.Impossible]: 4,
}

export enum Behavior {
  Random = 'Random',
  Warrior = 'Warrior',
  Builder = 'Builder',
  Explorer = 'Explorer',
}

export const behaviorEnum = {
  [Behavior.Random]: 0,
  [Behavior.Warrior]: 1,
  [Behavior.Builder]: 2,
  [Behavior.Explorer]: 3,
}

export enum HallLevel {
  Town = 'Town',
  City = 'City',
  Capitol = 'Capitol',
}

export const hallLevelEnum = {
  [HallLevel.Town]: 0,
  [HallLevel.City]: 1,
  [HallLevel.Capitol]: 2,
}

export enum CastleLevel {
  Fort = 'Fort',
  Citadel = 'Citadel',
  Castle = 'Castle',
}

export const castleLevelEnum = {
  [CastleLevel.Fort]: 0,
  [CastleLevel.Citadel]: 1,
  [CastleLevel.Castle]: 2,
}

export enum Gender {
  Default = 'Default',
  Male = 'Male',
  Female = 'Female',
}

export const genderEnum = {
  [Gender.Default]: 0xff,
  [Gender.Male]: 0x00,
  [Gender.Female]: 0x01,
}
