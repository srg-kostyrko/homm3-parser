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
import { artifactEnum } from './enums/artifact'
import { creatureEnum } from './enums/creature'
import { heroEnum } from './enums/hero'
import { secondarySkillEnum, secondarySkillMasteryEnum } from './enums/skill'
import { spellEnum } from './enums/spell'
import { resourceEnum } from './enums/resource'
import { playerEnum } from './enums/player'
import {
  PrimarySkills,
  CreatureSlot,
  WornArtifacts,
  Backpack,
  Artifacts,
  SecondarySkillData,
} from './contracts/common'

export const isRoE = (context: Context): boolean => context.get('format') === MapFormat.ROE
export const isSoD = (context: Context): boolean => context.get('format') === MapFormat.SOD
export const isNotRoE = (context: Context): boolean => context.get('format') !== MapFormat.ROE

export const hommString = pascalString(uint32)

export const primarySkills = struct<PrimarySkills>(
  uint8`attack`,
  uint8`defense`,
  uint8`spellPower`,
  uint8`knowledge`,
)

export const skill = enums(byte, secondarySkillEnum)

export const secondarySkill = struct<SecondarySkillData>(
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

export const creatureSlot = struct<CreatureSlot>(creature`type`, uint16`quantity`)

export const army = array(creatureSlot, 7)

export const resources = array(int32, 7)

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

export const backpack = struct<Backpack>(
  //
  uint16`count`,
  array(artifact, ctx`count`)`artifacts`,
)

export const artifacts = struct<Artifacts>(wornArtifacts`worn`, backpack`backpack`)

export const owner = enums(byte, playerEnum)
