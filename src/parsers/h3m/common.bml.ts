import {
  byte,
  uint8,
  uint32,
  when,
  struct,
  uint16,
  array,
  pascalString,
  enums,
  ctx,
  Context
} from 'binary-markup'

import { MapFormat } from './constants'
import { artifactEnum, Artifact } from './constants/artifact'
import { creatureEnum, Creature } from './constants/creature'
import { heroEnum } from './constants/hero'
import { skillEnum, Skill } from './constants/skill'
import { spellEnum } from './constants/spell'
import { resourceEnum } from './constants/resource'
import { playerEnum } from './constants/player'

export const isRoE = (context: Context): boolean => context.get('format') === MapFormat.ROE
export const isSoD = (context: Context): boolean => context.get('format') === MapFormat.SOD
export const isNotRoE = (context: Context): boolean => context.get('format') !== MapFormat.ROE

export const hommString = pascalString(uint32)

export interface PrimarySkills {
  attack_skill: number
  defense_skill: number
  spell_power: number
  knowledge: number
}
export const primarySkills = struct(
  uint8`attack_skill`,
  uint8`defense_skill`,
  uint8`spell_power`,
  uint8`knowledge`
)

export const skill = enums(byte, skillEnum)

export interface SecondarySkill {
  type: Skill
  level: number
}
export const secondarySkill = struct(skill`type`, uint8`level`)
export const experience = uint32
export const heroType = uint8
export const artifactType = when(isRoE, uint8, uint16)
export const creatureType = when(isRoE, uint8, uint16)
export const resourceType = uint8
export const spellType = uint8
export const absodId = uint32
export const playerFlag = uint8

export const artifact = enums(artifactType, artifactEnum)
export const creature = enums(creatureType, creatureEnum)
export const hero = enums(heroType, heroEnum)
export const spell = enums(spellType, spellEnum)
export const resource = enums(resourceType, resourceEnum)

export interface CreatureSlot {
  type: Creature
  quantity: number
}
export const creatureSlot = struct(creature`type`, uint16`quantity`)

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
export const resources = array(resourceType, 7)

export interface WornArtifacts {
  headwear: Artifact
  shoulders: Artifact
  right_hand: Artifact
  left_hand: Artifact
  torso: Artifact
  right_ring: Artifact
  left_ring: Artifact
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

export const wornArtifacts = struct(
  artifact`headwear`,
  artifact`shoulders`,
  artifact`right_hand`,
  artifact`left_hand`,
  artifact`torso`,
  artifact`right_ring`,
  artifact`left_ring`,
  artifact`feet`,
  artifact`misc1`,
  artifact`misc2`,
  artifact`misc3`,
  artifact`misc4`,
  artifact`device1`,
  artifact`device2`,
  artifact`device3`,
  artifact`device4`,
  when(isSoD, uint16)`unknown`,
  artifact`spellbook`,
  artifact`misc5`
)

export interface Backpack {
  count: number
  artifacts: Artifact
}

export const backpack = struct(uint16`count`, array(artifact, ctx`count`)`artifacts`)

export interface Artifacts {
  worn: WornArtifacts
  backpack: Backpack
}
export const artifacts = struct(wornArtifacts`worn`, backpack`backpack`)

export const owner = enums(byte, playerEnum)
