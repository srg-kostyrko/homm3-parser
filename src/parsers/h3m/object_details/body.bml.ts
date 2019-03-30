import {
  uint8,
  int8,
  uint16,
  uint32,
  int32,
  bytes,
  array,
  when,
  branch,
  struct,
  pass,
  ctx,
  enums,
  skip,
  flag
} from 'binary-markup'

import { MapFormat, Gender } from '../constants'
import { quest, Quest } from './quest.bml'
import { seersHut, SeersHut } from './seers_hut.bml'
import { town, Town } from './town.bml'
import {
  isSoD,
  isNotRoE,
  hommString,
  army,
  resources,
  primarySkills,
  secondarySkill,
  artifact,
  spell,
  artifacts,
  creatureSlot,
  hero,
  owner,
  Army,
  Resources,
  PrimarySkills,
  SecondarySkill,
  CreatureSlot,
  Artifacts
} from '../common.bml'
import { dispositioEnum, Disposition } from '../constants/disposition'
import { MetaType } from '../constants/meta'
import { FlaggedProp } from '../../../helpers/types'
import { Artifact } from '../constants/artifact'
import { Spell } from '../constants/spell'
import { Player } from '../player.bml'
import { Hero } from '../constants/hero'
import { formationEnum, Formation } from '../constants/formation'

export type Guardians = {
  message: string
} & FlaggedProp<'hasCreatures', 'creatures', Army>

const guardians = struct(
  hommString`message`,
  flag`hasCreatures`,
  when(ctx`has_creatures`, army)`creatures`,
  skip(4)
)

export interface Contents {
  experience: number
  spellPoints: number
  morale: number
  luck: number
  resources: Resources
  primarySkills: PrimarySkills
  secondarySkillsCount: number
  secondarySkills: SecondarySkill[]
  artifactsCount: number
  artifacts: Artifact[]
  spellsCount: number
  spells: Spell[]
  creaturesCount: number
  creatures: CreatureSlot[]
}

const contents = struct(
  uint32`experience`,
  int32`spellPoints`,
  int8`morale`,
  int8`luck`,
  resources`resources`,
  primarySkills`primarySkills`,
  uint8`secondarySkillsCount`,
  array(secondarySkill, ctx`secondarySkillsCount`)`secondarySkills`,
  uint8`artifactsCount`,
  array(artifact, ctx`artifactsCount`)`artifacts`,
  uint8`spellsCount`,
  array(spell, ctx`spellsCount`)`spells`,
  uint8`creaturesCount`,
  array(creatureSlot, ctx`creaturesCount`)`creatures`,
  skip(8)
)

export type WithGuardians = FlaggedProp<'hasGuardians', 'guardians', Guardians>

export type PandoraBox = WithGuardians & {
  contents: Contents
}

const pandoraBox = struct(
  uint8`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  contents`contents`
)

export interface MessageBearer {
  message: string
}
const messageBearer = struct(hommString`message`, skip(4))

export interface Garrison {
  owner: Player
  creatures: Army
  removableUnits: number
}
const garrison = struct(
  uint32`owner`,
  army`creatures`,
  when(isNotRoE, uint8)`removableUnits`,
  skip(8)
)

export type Event = WithGuardians & {
  contents: Contents
  appliesToPlayers: boolean
  appliesToComputer: boolean
  cancelAfterVisit: boolean
}
const event = struct(
  uint8`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  contents`contents`,
  flag`appliesToPlayers`,
  flag`appliesToComputer`,
  flag`cancelAfterVisit`,
  skip(4)
)

export interface Grail {
  allowableRadius: number
}
const grail = struct(uint32`allowableRadius`)
export interface Flagged {
  owner: Player
}
const flagged = struct(uint32`owner`)

export interface RandomDwelling {
  owner: Player
  castle?: {
    castleAbsodId: number
    alignment: [number, number]
  }
  level?: {
    minLevel: number
    maxLevel: number
  }
}
const randomDwelling = struct(
  uint32`owner`,
  when(
    ctx`type`.neq(MetaType.RandomDwellingAlignment),
    struct(
      uint32`castleAbsodId`, // not present in "Random Dwelling Castle" etc
      when(ctx`castleAbsodId`.eq(0), bytes(2))`alignment`
    )
  )`castle`,
  when(ctx`type`.neq(MetaType.RandomDwellingLevel), struct(uint8`minLevel`, uint8`maxLevel`))`level`
)

export type HeroData = {
  absod_id?: number
  owner: Player
  hero: Hero
  hasExperience?: boolean
  experience?: number
  formation: Formation
  patrolRadius: number
  biography: FlaggedProp<'hasBiography', 'biography', string>
  gender: Gender
  hasSpells?: boolean
  spells: number | number[]
  hasPrimarySkills?: boolean
  primarySkills?: PrimarySkills
} & FlaggedProp<'hasName', 'name', string> &
  FlaggedProp<'hasFace', 'face', number> &
  FlaggedProp<
    'hasSecondarySkills',
    'secondarySkills',
    {
      count: number
      skills: SecondarySkill[]
    }
  > &
  FlaggedProp<'hasCreatures', 'creatures', Army> &
  FlaggedProp<'hasArtifacts', 'artifacts', Artifacts>

const heroData = struct(
  when(isNotRoE, uint32)`absod_id`,
  owner`owner`,
  hero`hero`,
  uint8`hasName`,
  when(ctx`hasName`, hommString)`name`,
  when(isSoD, uint8)`hasExperience`,
  branch(ctx`format`, {
    [MapFormat.ROE]: uint32,
    [MapFormat.AB]: uint32,
    [MapFormat.SOD]: when(ctx`has_experience`, uint32)
  })`experience`,
  uint8`hasFace`,
  when(ctx`hasFace`, uint8)`face`,
  uint8`hasSecondarySkills`,
  when(
    ctx`hasSecondarySkills`,
    struct(uint32`count`, array(secondarySkill, ctx`count`)`skills`)
  )`secondarySkills`,
  uint8`hasCreatures`,
  when(ctx`hasCreatures`, army)`creatures`,
  enums(uint8, formationEnum)`formation`,
  uint8`hasArtifacts`,
  when(ctx`hasArtifacts`, artifacts)`artifacts`,
  uint8`patrolRadius`, // default 0xFF
  when(
    isNotRoE,
    struct(uint8`hasBiography`, when(ctx`hasBiography`, hommString)`biography`)
  )`biography`,
  when(isNotRoE, uint8)`gender`,
  when(isSoD, uint8)`hasSpells`,
  branch<null | number | number[]>(ctx`format`, {
    [MapFormat.ROE]: pass,
    [MapFormat.AB]: uint8, // In AB only a single spell can be specified here, 0xFE is default, 0xFF none
    [MapFormat.SOD]: when(ctx`hasSpells`, bytes(9), pass)
  })`spells`,
  when(isSoD, uint8)`hasPrimarySkills`,
  when(ctx`hasPrimarySkills`, primarySkills)`primarySkills`,
  skip(16)
)

export interface Treasure {
  resources: Resources
  artifact: Artifact
}
const treasure = struct(resources`resources`, artifact`artifact`)

export interface MessageAndTreasure {
  message: string
  treasure: Treasure
}
const messageAndTreasure = struct(hommString`message`, treasure`treasure`)

export type Monster = {
  absodId?: number
  quantity: number
  disposition: Disposition
  neverFlees: boolean
  doesNotGrow: boolean
} & FlaggedProp<'hasMessageAndTreasure', 'messageAndTreasure', MessageAndTreasure>

const monster = struct(
  when(isNotRoE, uint32)`absodId`,
  uint16`quantity`,
  enums(uint8, dispositioEnum)`disposition`,
  uint8`hasMessageAndTreasure`,
  when(ctx`hasMessageAndTreasure`, messageAndTreasure)`messageAndTreasure`,
  flag`neverFlees`,
  flag`doesNotGrow`,
  skip(2)
)

export type ArtifactObject = FlaggedProp<'hasGuardians', 'guardians', Guardians>
const artifactObject = struct(
  //
  uint8`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`
)
export interface Shrine {
  spell: Spell
}
const shrine = struct(spell`spell`)

export type SpellScroll = ArtifactObject & {
  spell: Spell
}
const spellScroll = struct(
  uint8`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  spell`spell`
)

export type ResourceData = ArtifactObject & {
  quantity: number
}
const resource = struct(
  uint8`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`hasGuardians`,
  uint32`quantity`,
  skip(4)
)

export interface WitchHut {
  potentialSkills: number[]
}
const witchHut = struct(bytes(4)`potentialSkills`)

export interface Scholar {
  rewardType: number
  rewardValue: number
}
const scholar = struct(uint8`rewardType`, uint8`rewardValue`, skip(6))

export interface HeroPlaceholder {
  owner: Player
  type: number
  powerRating: number
}
const heroPlaceholder = struct(
  owner`owner`,
  uint8`type`,
  when(ctx`type`.eq(0xff), uint8)`powerRating`
)

export type ObjectBody =
  | HeroPlaceholder
  | Quest
  | PandoraBox
  | MessageBearer
  | Garrison
  | Event
  | Grail
  | Flagged
  | Town
  | RandomDwelling
  | HeroData
  | Monster
  | ArtifactObject
  | Shrine
  | SpellScroll
  | ResourceData
  | WitchHut
  | SeersHut
  | Scholar
  | {}

const bodyMap = {
  [MetaType.PlaceholderHero]: heroPlaceholder,
  [MetaType.QuestGuard]: quest,
  [MetaType.PandorasBox]: pandoraBox,
  [MetaType.Sign]: messageBearer,
  [MetaType.OceanBottle]: messageBearer,
  [MetaType.Garrison]: garrison,
  [MetaType.Event]: event,
  [MetaType.Grail]: grail,
  [MetaType.Dwelling]: flagged,
  [MetaType.Lighthouse]: flagged,
  [MetaType.ResourceGenerator]: flagged,
  [MetaType.Shipyard]: flagged,
  [MetaType.AbandonedMine]: flagged,

  // Generic objects have no body
  [MetaType.Boat]: pass,
  [MetaType.PassableTerrain]: pass,
  [MetaType.ImpassableTerrain]: pass,
  [MetaType.Visitable]: pass,
  [MetaType.Treasure]: pass,
  [MetaType.MonolithTwoWay]: pass,
  [MetaType.SubterraneanGate]: pass,

  [MetaType.Town]: town,
  [MetaType.RandomDwelling]: randomDwelling,
  [MetaType.RandomDwellingAlignment]: randomDwelling,
  [MetaType.RandomDwellingLevel]: randomDwelling,
  [MetaType.Hero]: heroData,
  [MetaType.RandomHero]: heroData,
  [MetaType.Prison]: heroData,
  [MetaType.Monster]: monster,
  [MetaType.Artifact]: artifactObject,
  [MetaType.Shrine]: shrine,
  [MetaType.SpellScroll]: spellScroll,
  [MetaType.Resource]: resource,
  [MetaType.WitchHut]: when(isNotRoE, witchHut),
  [MetaType.SeersHut]: seersHut,
  [MetaType.Scholar]: scholar
}

export const objectBody = branch<unknown>(ctx`type`, bodyMap)
