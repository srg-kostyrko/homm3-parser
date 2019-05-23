import { struct, when, ctx, flag, bytes, skip } from 'binary-markup'
import { WithGuardians, Contents, guardians, contents } from './common.bml'
import { Player } from '../constants/player'
import { bitMasksArray } from '../../../helpers/objects'

export type Event = WithGuardians & {
  contents: Contents
  appliesToPlayers: Player[]
  appliesToComputer: boolean
  cancelAfterVisit: boolean
}

export const event = struct<Event>(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  contents`contents`,
  bitMasksArray(bytes(1), [
    [
      [1, Player.Red],
      [2, Player.Blue],
      [4, Player.Tan],
      [8, Player.Green],
      [16, Player.Orange],
      [32, Player.Purple],
      [64, Player.Teal],
      [128, Player.Pink],
    ],
  ])`appliesToPlayers`,
  flag`appliesToComputer`,
  flag`cancelAfterVisit`,
  skip(4),
)
