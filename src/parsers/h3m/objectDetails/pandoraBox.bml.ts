import { struct, flag, when, ctx } from 'binary-markup'
import { guardians, WithGuardians, contents, Contents } from './common.bml'

export type PandoraBox = WithGuardians & {
  contents: Contents
}

export const pandoraBox = struct(
  flag`hasGuardians`,
  when(ctx`hasGuardians`, guardians)`guardians`,
  contents`contents`,
)
