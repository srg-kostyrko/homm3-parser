import { byte, uint8, uint32, when, struct, skip, ctx, array, flag, enums } from 'binary-markup'
import { isRoE, isNotRoE, isSoD, hero, hommString } from './common.bml'
import { Hero } from './constants/hero'
import { behaviorEnum, Behavior } from './constants'
import { FlaggedProp } from '../../helpers/types'

const mainTown = struct(
  when(isNotRoE, byte)`createHero`,
  when(isNotRoE, byte)`type`,
  byte`x`,
  byte`y`,
  byte`z`
)

const startingHeroRoE = struct(
  flag`isRandom`,
  hero`hero`,
  when(ctx<Hero>`hero`.neq(Hero.NONE), byte)`face`,
  when(ctx<Hero>`hero`.neq(Hero.NONE), hommString)`name`
)
const startingHeroAbSoD = struct(
  //
  flag`isRandom`,
  hero`hero`,
  byte`face`,
  hommString`name`
)

const startingHero = when(isRoE, startingHeroRoE, startingHeroAbSoD)

const additionalHeroInfo = struct(hero`hero`, hommString`name`)

const additionalInfo = struct(
  skip(1),
  uint32`heroesCount`,
  array(additionalHeroInfo, ctx`heroesCount`)`heroes`
)

export interface StartingHero {
  isRandom: boolean
  hero: Hero
  face?: number
  name?: string
}

export type MainTown = FlaggedProp<
  'hasMainTown',
  'mainTown',
  {
    createHero: number
    type: number
    x: number
    y: number
    z: number
  }
>

export interface PlayerBase {
  canBeHuman: boolean
  canBeComputer: boolean
  behavior: Behavior
  allowedAlignments: number
  townTypes: number
  townConflux: number
  hasRandomTown: boolean
  startingHero: StartingHero
  additionaInfo?: {
    heroesCount: number
    heroes: {
      hero: Hero
      name: string
    }[]
  }
}

export type Player = PlayerBase & MainTown

export const player = struct(
  flag`canBeHuman`,
  flag`canBeComputer`,
  enums(uint8, behaviorEnum)`behavior`,
  when(isSoD, uint8)`allowedAlignments`,
  uint8`townTypes`, // bitfield
  when(isNotRoE, uint8)`townConflux`, // 8-Con, AB/SOD feature
  flag`hasRandomTown`,
  flag`hasMainTown`,
  when(ctx`hasMainTown`, mainTown)`mainTown`,
  startingHero`startingHero`,
  when(
    context => isNotRoE(context) && context.get<StartingHero>('startingHero').hero !== Hero.NONE,
    additionalInfo
  )`additionaInfo`
)
