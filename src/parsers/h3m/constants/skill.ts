import { bytes } from 'binary-markup'
import { bitMasksArray } from '../../../helpers/objects'

export enum PrimarySkill {
  Attack = 'Attack',
  Defence = 'Defence',
  SpellPower = 'SpellPower',
  Knowledge = 'Knowledge',
}

export const primarySkillEnum = {
  [PrimarySkill.Attack]: 0,
  [PrimarySkill.Defence]: 1,
  [PrimarySkill.SpellPower]: 2,
  [PrimarySkill.Knowledge]: 3,
}

export enum SecondarySkillType {
  Pathfinding = 'Pathfinding',
  Archery = 'Archery',
  Logistics = 'Logistics',
  Scouting = 'Scouting',
  Diplomacy = 'Diplomacy',
  Navigation = 'Navigation',
  Leadership = 'Leadership',
  Wisdom = 'Wisdom',
  Mysticism = 'Mysticism',
  Luck = 'Luck',
  Ballistics = 'Ballistics',
  EagleEye = 'EagleEye',
  Necromancy = 'Necromancy',
  Estates = 'Estates',
  FireMagic = 'FireMagic',
  AirMagic = 'AirMagic',
  WaterMagic = 'WaterMagic',
  EarthMagic = 'EarthMagic',
  Scholar = 'Scholar',
  Tactics = 'Tactics',
  Artillery = 'Artillery',
  Learning = 'Learning',
  Offense = 'Offense',
  Armorer = 'Armorer',
  Intelligence = 'Intelligence',
  Sorcery = 'Sorcery',
  Resistance = 'Resistance',
  FirstAid = 'FirstAid',
}

export const secondarySkillEnum = {
  [SecondarySkillType.Pathfinding]: 0x00,
  [SecondarySkillType.Archery]: 0x01,
  [SecondarySkillType.Logistics]: 0x02,
  [SecondarySkillType.Scouting]: 0x03,
  [SecondarySkillType.Diplomacy]: 0x04,
  [SecondarySkillType.Navigation]: 0x05,
  [SecondarySkillType.Leadership]: 0x06,
  [SecondarySkillType.Wisdom]: 0x07,
  [SecondarySkillType.Mysticism]: 0x08,
  [SecondarySkillType.Luck]: 0x09,
  [SecondarySkillType.Ballistics]: 0x0a,
  [SecondarySkillType.EagleEye]: 0x0b,
  [SecondarySkillType.Necromancy]: 0x0c,
  [SecondarySkillType.Estates]: 0x0d,
  [SecondarySkillType.FireMagic]: 0x0e,
  [SecondarySkillType.AirMagic]: 0x0f,
  [SecondarySkillType.WaterMagic]: 0x10,
  [SecondarySkillType.EarthMagic]: 0x11,
  [SecondarySkillType.Scholar]: 0x12,
  [SecondarySkillType.Tactics]: 0x13,
  [SecondarySkillType.Artillery]: 0x14,
  [SecondarySkillType.Learning]: 0x15,
  [SecondarySkillType.Offense]: 0x16,
  [SecondarySkillType.Armorer]: 0x17,
  [SecondarySkillType.Intelligence]: 0x18,
  [SecondarySkillType.Sorcery]: 0x19,
  [SecondarySkillType.Resistance]: 0x1a,
  [SecondarySkillType.FirstAid]: 0x1b,
}

const skillBits: [number, SecondarySkillType][][] = [
  [
    [1, SecondarySkillType.Pathfinding],
    [2, SecondarySkillType.Archery],
    [4, SecondarySkillType.Logistics],
    [8, SecondarySkillType.Scouting],
    [16, SecondarySkillType.Diplomacy],
    [32, SecondarySkillType.Navigation],
    [64, SecondarySkillType.Leadership],
    [128, SecondarySkillType.Wisdom],
  ],
  [
    [1, SecondarySkillType.Mysticism],
    [2, SecondarySkillType.Luck],
    [4, SecondarySkillType.Ballistics],
    [8, SecondarySkillType.EagleEye],
    [16, SecondarySkillType.Necromancy],
    [32, SecondarySkillType.Estates],
    [64, SecondarySkillType.FireMagic],
    [128, SecondarySkillType.AirMagic],
  ],
  [
    [1, SecondarySkillType.WaterMagic],
    [2, SecondarySkillType.EarthMagic],
    [4, SecondarySkillType.Scholar],
    [8, SecondarySkillType.Tactics],
    [16, SecondarySkillType.Artillery],
    [32, SecondarySkillType.Learning],
    [64, SecondarySkillType.Offense],
    [128, SecondarySkillType.Armorer],
  ],
  [
    [1, SecondarySkillType.Intelligence],
    [2, SecondarySkillType.Sorcery],
    [4, SecondarySkillType.Resistance],
    [8, SecondarySkillType.FirstAid],
  ],
]

export const skillsMask = bitMasksArray(bytes(4), skillBits)

export enum SecondarySkillMastery {
  Basic = 'Basic',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

export const secondarySkillMasteryEnum = {
  [SecondarySkillMastery.Basic]: 1,
  [SecondarySkillMastery.Advanced]: 2,
  [SecondarySkillMastery.Expert]: 3,
}
