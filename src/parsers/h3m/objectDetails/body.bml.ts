import {
  uint8,
  uint32,
  when,
  branch,
  struct,
  pass,
  ctx,
  enums,
  skip,
  flag,
  computed,
} from 'binary-markup'

import { quest } from './quest.bml'
import { seersHut } from './seersHut.bml'
import { town } from './town.bml'
import { isNotRoE, hommString, army } from '../common.bml'
import { MetaType } from '../contracts/enums/MetaType'
import { spellEnum } from '../enums/spell'
import { scholar } from './scholar.bml'
import { playerEnum } from '../enums/player'
import { randomDwelling, randomDwellingAlignment, randomDwellingLevel } from './randomDwelling.bml'
import { guardians } from './common.bml'
import { heroPlaceholder, heroData } from './hero.bml'
import { pandoraBox } from './pandoraBox.bml'
import { creatureData } from './creature.bml'
import { event } from './event.bml'
import { skillsMask } from '../enums/skill'

const messageBearer = struct(hommString`message`, skip(4))

const garrison = struct(
  enums(uint32, playerEnum)`owner`,
  army`creatures`,
  when(isNotRoE, uint8)`removableUnits`,
  skip(8),
)

const grail = struct(uint32`allowableRadius`)

const flagged = struct(uint32`owner`)

const artifactObject = struct(
  //
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
)
const shrine = struct(uint32`spell`)

const spellScroll = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  enums(uint32, spellEnum)`spell`,
)

const resource = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`hasGuardians`,
  uint32`quantity`,
  skip(4),
)

const witchHut = struct(skillsMask`potentialSkills`)

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

export const objectBody = struct(
  computed(ctx`attributes.metaType`)`type`,
  branch(ctx`type`, bodyMap)`data`,
)
