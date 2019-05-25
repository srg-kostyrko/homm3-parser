import { SecondarySkillType } from './enums/SecondarySkill'
import { SecondarySkillMastery } from './enums/SecondarySkillMastery'
import { Creature } from './enums/Creature'
import { Artifact } from './enums/Artifact'

export interface PrimarySkills {
  attack: number
  defense: number
  spellPower: number
  knowledge: number
}

export interface SecondarySkillData {
  type: SecondarySkillType
  level: SecondarySkillMastery
}

export interface CreatureSlot {
  type: Creature
  quantity: number
}

export type Army = CreatureSlot[]

export type Resources = number[]

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

export interface Backpack {
  count: number
  artifacts: Artifact
}

export interface Artifacts {
  worn: WornArtifacts
  backpack: Backpack
}
