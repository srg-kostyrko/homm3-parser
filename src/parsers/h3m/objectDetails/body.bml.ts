import { uint8, uint32, when, branch, struct, pass, ctx, enums, skip, flag } from 'binary-markup'

import { quest, Quest } from './quest.bml'
import { seersHut, SeersHut } from './seersHut.bml'
import { town, Town } from './town.bml'
import { isNotRoE, hommString, army, Army } from '../common.bml'
import { MetaType } from '../constants/meta'
import { FlaggedProp } from '../../../helpers/types'
import { Spell, spellEnum } from '../constants/spell'
import { Scholar, scholar } from './scholar.bml'
import { Player, playerEnum } from '../constants/player'
import {
  randomDwelling,
  randomDwellingAlignment,
  randomDwellingLevel,
  RandomDwelling,
  RandomDwellingAlignment,
  RandomDwellingLevel,
} from './randomDwelling.bml'
import { WitchHut, witchHut } from './witchHut.bml'
import { Guardians, guardians } from './common.bml'
import { HeroPlaceholder, HeroData, heroPlaceholder, heroData } from './hero.bml'
import { PandoraBox, pandoraBox } from './pandoraBox.bml'
import { Creature, creatureData } from './creature.bml'
import { event } from './event.bml'

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
  enums(uint32, playerEnum)`owner`,
  army`creatures`,
  when(isNotRoE, uint8)`removableUnits`,
  skip(8),
)

export interface Grail {
  allowableRadius: number
}
const grail = struct(uint32`allowableRadius`)

export interface Flagged {
  owner: Player
}
const flagged = struct(uint32`owner`)

export type ArtifactObject = FlaggedProp<'hasGuardians', 'guardians', Guardians>
const artifactObject = struct(
  //
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
)
export interface Shrine {
  spell: Spell
}
const shrine = struct(uint32`spell`)

export type SpellScroll = ArtifactObject & {
  spell: Spell
}
const spellScroll = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  enums(uint32, spellEnum)`spell`,
)

export type ResourceData = ArtifactObject & {
  quantity: number
}
const resource = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`hasGuardians`,
  uint32`quantity`,
  skip(4),
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
  | RandomDwellingAlignment
  | RandomDwellingLevel
  | HeroData
  | Creature
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
  [MetaType.RandomDwellingAlignment]: randomDwellingAlignment,
  [MetaType.RandomDwellingLevel]: randomDwellingLevel,
  [MetaType.Hero]: heroData,
  [MetaType.RandomHero]: heroData,
  [MetaType.Prison]: heroData,
  [MetaType.Creature]: creatureData,
  [MetaType.Artifact]: artifactObject,
  [MetaType.Shrine]: shrine,
  [MetaType.SpellScroll]: spellScroll,
  [MetaType.Resource]: resource,
  [MetaType.WitchHut]: when(isNotRoE, witchHut),
  [MetaType.SeersHut]: seersHut,
  [MetaType.Scholar]: scholar,
}

export const objectBody = branch<unknown>(ctx`attributes.metaType`, bodyMap)
