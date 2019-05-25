import { Hero } from './enums/Hero'
import { FlaggedProp, Omit } from '../../../helpers/types'
import { Behavior } from '../constants'

export type StartingHero =
  | {
      isRandom: boolean
      hero: Hero.NONE
      face: number
      name: string
    }
  | {
      isRandom: boolean
      hero: Hero
      face: number
      name: string
      additionaInfo: {
        heroesCount: number
        heroes: {
          hero: Hero
          name: string
        }[]
      }
    }

export type StartingHeroRoE =
  | {
      isRandom: boolean
      hero: Hero.NONE
    }
  | {
      isRandom: boolean
      hero: Hero
      face: number
      name: string
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

export type MainTownRoE = FlaggedProp<
  'hasMainTown',
  'mainTown',
  {
    x: number
    y: number
    z: number
  }
>

export type PlayerData = {
  canBeHuman: boolean
  canBeComputer: boolean
  behavior: Behavior
  allowedAlignments: number
  townTypes: number
  townConflux: number
  hasRandomTown: boolean
  startingHero: StartingHero
} & MainTown

export type PlayerDataRoE = {
  canBeHuman: boolean
  canBeComputer: boolean
  behavior: Behavior
  townTypes: number
  hasRandomTown: boolean
  startingHero: StartingHeroRoE
} & MainTownRoE

export type PlayerDataAb = Omit<PlayerData, 'allowedAlignments'>
