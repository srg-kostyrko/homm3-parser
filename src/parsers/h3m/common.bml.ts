import {
  byte,
  uint8,
  int8,
  int16,
  uint32,
  int32,
  when,
  struct,
  uint16,
  array,
  pascalString,
  enums,
  ctx,
  Context,
} from 'binary-markup'

import { MapFormat } from './constants'
import { artifactEnum, Artifact } from './constants/artifact'
import { creatureEnum, Creature } from './constants/creature'
import { heroEnum } from './constants/hero'
import {
  secondarySkillEnum,
  SecondarySkillType,
  secondarySkillMasteryEnum,
  SecondarySkillMastery,
} from './constants/skill'
import { spellEnum } from './constants/spell'
import { resourceEnum } from './constants/resource'
import { playerEnum } from './constants/player'

export const isRoE = (context: Context): boolean => context.get('format') === MapFormat.ROE
export const isSoD = (context: Context): boolean => context.get('format') === MapFormat.SOD
export const isNotRoE = (context: Context): boolean => context.get('format') !== MapFormat.ROE

export const hommString = pascalString(uint32)

export interface PrimarySkills {
  attack: number
  defense: number
  spellPower: number
  knowledge: number
}
export const primarySkills = struct<PrimarySkills>(
  uint8`attack`,
  uint8`defense`,
  uint8`spellPower`,
  uint8`knowledge`,
)

export const skill = enums(byte, secondarySkillEnum)

export interface SecondarySkill {
  type: SecondarySkillType
  level: SecondarySkillMastery
}
export const secondarySkill = struct<SecondarySkill>(
  skill`type`,
  enums(uint8, secondarySkillMasteryEnum)`level`,
)
export const experience = uint32
export const heroType = uint8
export const artifactType = when(isRoE, uint8, uint16)
export const creatureType = when(isRoE, int8, int16)
export const resourceType = uint8
export const spellType = uint8
export const absodId = uint32
export const playerFlag = enums(uint8, playerEnum)

export const artifact = enums(artifactType, artifactEnum)
export const creature = enums(creatureType, creatureEnum)
export const hero = enums(heroType, heroEnum)
export const spell = enums(spellType, spellEnum)
export const resource = enums(resourceType, resourceEnum)

export interface CreatureSlot {
  type: Creature
  quantity: number
}
export const creatureSlot = struct<CreatureSlot>(creature`type`, uint16`quantity`)

export type Army = [
  CreatureSlot,
  CreatureSlot,
  CreatureSlot,
  CreatureSlot,
  CreatureSlot,
  CreatureSlot,
  CreatureSlot
]
export const army = array(creatureSlot, 7)

export type Resources = number[]
export const resources = array(int32, 7)

export interface WornArtifacts {
  headwear: Artifact
  shoulders: Artifact
  rightHand: Artifact
  leftHand: Artifact
  torso: Artifact
  rightRing: Artifact
  leftRing: Artifact
  feet: Artifact
  misc1: Artifact
  misc2: Artifact
  misc3: Artifact
  misc4: Artifact
  device1: Artifact
  device2: Artifact
  device3: Artifact
  device4: Artifact
  spellbook: Artifact
  misc5: Artifact
}

export const wornArtifacts = struct<WornArtifacts>(
  artifact`headwear`,
  artifact`shoulders`,
  artifact`rightHand`,
  artifact`leftHand`,
  artifact`torso`,
  artifact`rightRing`,
  artifact`leftRing`,
  artifact`feet`,
  artifact`misc1`,
  artifact`misc2`,
  artifact`misc3`,
  artifact`misc4`,
  artifact`device1`,
  artifact`device2`,
  artifact`device3`,
  artifact`device4`,
  when(isSoD, uint16),
  artifact`spellbook`,
  artifact`misc5`,
)

export interface Backpack {
  count: number
  artifacts: Artifact
}

export const backpack = struct<Backpack>(
  //
  uint16`count`,
  array(artifact, ctx`count`)`artifacts`,
)

export interface Artifacts {
  worn: WornArtifacts
  backpack: Backpack
}
export const artifacts = struct<Artifacts>(wornArtifacts`worn`, backpack`backpack`)

export const owner = enums(byte, playerEnum)
