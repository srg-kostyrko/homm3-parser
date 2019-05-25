import { WithGuardians, Contents } from './common'
import { Player } from '../enums/Player'

export type MapEvent = WithGuardians & {
  contents: Contents
  appliesToPlayers: Player[]
  appliesToComputer: boolean
  cancelAfterVisit: boolean
}
