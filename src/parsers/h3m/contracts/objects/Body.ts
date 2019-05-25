import { Player } from '../enums/Player'
import { Army } from '../common'
import { FlaggedProp } from '../../../../helpers/types'
import { Guardians, WithGuardians, Contents } from './common'
import { Spell } from '../enums/Spell'
import { SecondarySkillType } from '../enums/SecondarySkill'
import { Quest } from './Quest'
import { Town, TownAB, TownRoE } from './Town'
import { RandomDwelling, RandomDwellingAlignment, RandomDwellingLevel } from './RandomDwelling'
import { CreatureData, CreatureDataRoE } from './Creature'
import { SeersHut, SeersHutRoE } from './SeersHut'
import { Scholar } from './Scholar'
import { MetaType } from '../enums/MetaType'
import { MapEvent } from './Event'
import { HeroPlaceholder, HeroData, HeroDataAB, HeroDataRoE } from './Hero'

export interface MessageBearer {
  message: string
}

export interface Garrison {
  owner: Player
  creatures: Army
  removableUnits: number
}

export interface GarrisonRoE {
  owner: Player
  creatures: Army
}

export interface Grail {
  allowableRadius: number
}

export interface Flagged {
  owner: Player
}
export type ArtifactObject = FlaggedProp<'hasGuardians', 'guardians', Guardians>

export interface Shrine {
  spell: Spell
}

export type SpellScroll = ArtifactObject & {
  spell: Spell
}

export type ResourceData = ArtifactObject & {
  quantity: number
}

export interface WitchHut {
  potentialSkills: SecondarySkillType[]
}

export type PandoraBox = WithGuardians & {
  contents: Contents
}

interface BodyVariant<T extends MetaType, V> {
  type: T
  data: V
}

export type MapObjectBody =
  | BodyVariant<MetaType.PlaceholderHero, HeroPlaceholder>
  | BodyVariant<MetaType.QuestGuard, Quest>
  | BodyVariant<MetaType.PandorasBox, PandoraBox>
  | BodyVariant<MetaType.Sign | MetaType.OceanBottle, MessageBearer>
  | BodyVariant<MetaType.Garrison, Garrison>
  | BodyVariant<MetaType.Event, MapEvent>
  | BodyVariant<MetaType.Grail, Grail>
  | BodyVariant<
      | MetaType.Dwelling
      | MetaType.Lighthouse
      | MetaType.ResourceGenerator
      | MetaType.Shipyard
      | MetaType.AbandonedMine,
      Flagged
    >
  | BodyVariant<
      | MetaType.Boat
      | MetaType.PassableTerrain
      | MetaType.ImpassableTerrain
      | MetaType.Visitable
      | MetaType.Treasure
      | MetaType.MonolithTwoWay
      | MetaType.SubterraneanGate,
      null
    >
  | BodyVariant<MetaType.Town, Town>
  | BodyVariant<MetaType.RandomDwelling, RandomDwelling>
  | BodyVariant<MetaType.RandomDwellingAlignment, RandomDwellingAlignment>
  | BodyVariant<MetaType.RandomDwellingLevel, RandomDwellingLevel>
  | BodyVariant<MetaType.Hero | MetaType.RandomHero | MetaType.Prison, HeroData>
  | BodyVariant<MetaType.Creature, CreatureData>
  | BodyVariant<MetaType.Artifact, ArtifactObject>
  | BodyVariant<MetaType.Shrine, Shrine>
  | BodyVariant<MetaType.SpellScroll, SpellScroll>
  | BodyVariant<MetaType.Resource, ResourceData>
  | BodyVariant<MetaType.WitchHut, WitchHut>
  | BodyVariant<MetaType.SeersHut, SeersHut>
  | BodyVariant<MetaType.Scholar, Scholar>

export type MapObjectBodyAB =
  | BodyVariant<MetaType.PlaceholderHero, HeroPlaceholder>
  | BodyVariant<MetaType.QuestGuard, Quest>
  | BodyVariant<MetaType.PandorasBox, PandoraBox>
  | BodyVariant<MetaType.Sign | MetaType.OceanBottle, MessageBearer>
  | BodyVariant<MetaType.Garrison, Garrison>
  | BodyVariant<MetaType.Event, MapEvent>
  | BodyVariant<MetaType.Grail, Grail>
  | BodyVariant<
      | MetaType.Dwelling
      | MetaType.Lighthouse
      | MetaType.ResourceGenerator
      | MetaType.Shipyard
      | MetaType.AbandonedMine,
      Flagged
    >
  | BodyVariant<
      | MetaType.Boat
      | MetaType.PassableTerrain
      | MetaType.ImpassableTerrain
      | MetaType.Visitable
      | MetaType.Treasure
      | MetaType.MonolithTwoWay
      | MetaType.SubterraneanGate,
      null
    >
  | BodyVariant<MetaType.Town, TownAB>
  | BodyVariant<MetaType.RandomDwelling, RandomDwelling>
  | BodyVariant<MetaType.RandomDwellingAlignment, RandomDwellingAlignment>
  | BodyVariant<MetaType.RandomDwellingLevel, RandomDwellingLevel>
  | BodyVariant<MetaType.Hero | MetaType.RandomHero | MetaType.Prison, HeroDataAB>
  | BodyVariant<MetaType.Creature, CreatureData>
  | BodyVariant<MetaType.Artifact, ArtifactObject>
  | BodyVariant<MetaType.Shrine, Shrine>
  | BodyVariant<MetaType.SpellScroll, SpellScroll>
  | BodyVariant<MetaType.Resource, ResourceData>
  | BodyVariant<MetaType.WitchHut, WitchHut>
  | BodyVariant<MetaType.SeersHut, SeersHut>
  | BodyVariant<MetaType.Scholar, Scholar>

export type MapObjectBodyRoE =
  | BodyVariant<MetaType.PlaceholderHero, HeroPlaceholder>
  | BodyVariant<MetaType.QuestGuard, Quest>
  | BodyVariant<MetaType.PandorasBox, PandoraBox>
  | BodyVariant<MetaType.Sign | MetaType.OceanBottle, MessageBearer>
  | BodyVariant<MetaType.Garrison, GarrisonRoE>
  | BodyVariant<MetaType.Event, MapEvent>
  | BodyVariant<MetaType.Grail, Grail>
  | BodyVariant<
      | MetaType.Dwelling
      | MetaType.Lighthouse
      | MetaType.ResourceGenerator
      | MetaType.Shipyard
      | MetaType.AbandonedMine,
      Flagged
    >
  | BodyVariant<
      | MetaType.Boat
      | MetaType.PassableTerrain
      | MetaType.ImpassableTerrain
      | MetaType.Visitable
      | MetaType.Treasure
      | MetaType.MonolithTwoWay
      | MetaType.SubterraneanGate,
      null
    >
  | BodyVariant<MetaType.Town, TownRoE>
  | BodyVariant<MetaType.RandomDwelling, RandomDwelling>
  | BodyVariant<MetaType.RandomDwellingAlignment, RandomDwellingAlignment>
  | BodyVariant<MetaType.RandomDwellingLevel, RandomDwellingLevel>
  | BodyVariant<MetaType.Hero | MetaType.RandomHero | MetaType.Prison, HeroDataRoE>
  | BodyVariant<MetaType.Creature, CreatureDataRoE>
  | BodyVariant<MetaType.Artifact, ArtifactObject>
  | BodyVariant<MetaType.Shrine, Shrine>
  | BodyVariant<MetaType.SpellScroll, SpellScroll>
  | BodyVariant<MetaType.Resource, ResourceData>
  | BodyVariant<MetaType.WitchHut, WitchHut>
  | BodyVariant<MetaType.SeersHut, SeersHutRoE>
  | BodyVariant<MetaType.Scholar, Scholar>
