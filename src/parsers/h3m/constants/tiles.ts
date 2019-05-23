export enum Terrain {
  Dirt = 'Dirt',
  Sand = 'Sand',
  Grass = 'Grass',
  Snow = 'Snow',
  Swamp = 'Swamp',
  Rough = 'Rough',
  Sub = 'Sub',
  Lava = 'Lava',
  Water = 'Water',
  Rock = 'Rock',
}

export const terrainsEnum = {
  [Terrain.Dirt]: 0,
  [Terrain.Sand]: 1,
  [Terrain.Grass]: 2,
  [Terrain.Snow]: 3,
  [Terrain.Swamp]: 4,
  [Terrain.Rough]: 5,
  [Terrain.Sub]: 6,
  [Terrain.Lava]: 7,
  [Terrain.Water]: 8,
  [Terrain.Rock]: 9,
}

export enum River {
  None = 'None',
  Clear = 'Clear',
  Icy = 'Icy',
  Muddy = 'Muddy',
  Lava = 'Lava',
}

export const riversEnum = {
  [River.None]: 0,
  [River.Clear]: 1,
  [River.Icy]: 2,
  [River.Muddy]: 3,
  [River.Lava]: 4,
}

export enum Road {
  None = 'None',
  Dirt = 'Dirt',
  Gravel = 'Gravel',
  Cobble = 'Cobble',
}

export const roadsEnum = {
  [Road.None]: 0,
  [Road.Dirt]: 1,
  [Road.Gravel]: 2,
  [Road.Cobble]: 3,
}
