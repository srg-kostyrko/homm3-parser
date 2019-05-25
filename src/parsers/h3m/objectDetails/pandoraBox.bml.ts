import { struct, flag, when, ctx } from 'binary-markup'
import { guardians, contents } from './common.bml'

export const pandoraBox = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  contents`contents`,
)
