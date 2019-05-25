import { Player } from '../enums/Player'
import { Alignment } from '../enums/Alignment'

export interface RandomDwelling {
  owner: Player
  castle:
    | {
        castleAbsodId: 0
        alignments: Alignment[]
      }
    | {
        castleAbsodId: number
      }
  level: {
    min: number
    max: number
  }
}
export interface RandomDwellingAlignment {
  owner: Player
  level: {
    min: number
    max: number
  }
}

export interface RandomDwellingLevel {
  owner: Player
  castle:
    | {
        castleAbsodId: 0
        alignments: Alignment[]
      }
    | {
        castleAbsodId: number
      }
}
