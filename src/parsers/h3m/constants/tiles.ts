export enum Terrain {
  DIRT,
  SAND,
  GRASS,
  SNOW,
  SWAMP,
  ROUGH,
  SUB,
  LAVA,
  WATER,
  ROCK
}

export const terrainsEnum = {
  [Terrain.DIRT]: 0,
  [Terrain.SAND]: 1,
  [Terrain.GRASS]: 2,
  [Terrain.SNOW]: 3,
  [Terrain.SWAMP]: 4,
  [Terrain.ROUGH]: 5,
  [Terrain.SUB]: 6,
  [Terrain.LAVA]: 7,
  [Terrain.WATER]: 8,
  [Terrain.ROCK]: 9
}

export enum River {
  NONE,
  CLEAR,
  ICY,
  MUDDY,
  LAVA
}

export const riversEnum = {
  [River.NONE]: 0,
  [River.CLEAR]: 1,
  [River.ICY]: 2,
  [River.MUDDY]: 3,
  [River.LAVA]: 4
}

export enum Road {
  NONE,
  DIRT,
  GRAVEL,
  COBBLE
}

export const roadsEnum = {
  [Road.NONE]: 0,
  [Road.DIRT]: 1,
  [Road.GRAVEL]: 2,
  [Road.COBBLE]: 3
}
