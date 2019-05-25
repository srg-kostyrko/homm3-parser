import { struct, when, ctx, flag, bytes, skip } from 'binary-markup'

import { bitMasksArray } from '../../../helpers/objects'
import { guardians, contents } from './common.bml'
import { Player } from '../contracts/enums/Player'
import { MapEvent } from '../contracts/objects/Event'

export const event = struct<MapEvent>(
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
