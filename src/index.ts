import { parse, StreamInput } from 'binary-markup'
import { h3mFile, H3MFile } from './parsers/h3m/h3m.bml'

export function parseH3M(data: StreamInput): H3MFile {
  return parse<H3MFile>(h3mFile, data)
}
