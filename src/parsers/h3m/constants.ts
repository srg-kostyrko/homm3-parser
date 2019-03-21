export const H3M_MAX_PLAYERS = 8

export enum MapFormat {
  ROE,
  AB,
  SOD,
  CHR,
  WOG
}

export const formatEnum = {
  [MapFormat.ROE]: 0x0000000e,
  [MapFormat.AB]: 0x00000015,
  [MapFormat.SOD]: 0x0000001c,
  [MapFormat.CHR]: 0x0000001d,
  [MapFormat.WOG]: 0x00000033
}

export enum Difficulty {
  Easy,
  Normal,
  Hard,
  Expert,
  Impossible
}

export enum Behavior {
  Random,
  Warrior,
  Builder,
  Explorer
}

export const behaviorEnum = {
  [Behavior.Random]: 0,
  [Behavior.Warrior]: 1,
  [Behavior.Builder]: 2,
  [Behavior.Explorer]: 3
}

export enum HallLevel {
  Town,
  City,
  Capitol
}

export enum CastleLevel {
  Fort,
  Citadel,
  Castle
}

export enum Gender {
  Default,
  Male,
  Female
}
