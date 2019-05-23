import { parse, StreamInput, TagOrWrapper } from 'binary-markup'
import { inflate } from 'pako'
import { h3mFile, H3MFile } from './parsers/h3m/h3m.bml'

export * from './parsers/assets'

export { H3MFile } from './parsers/h3m/h3m.bml'

export function parseH3M(data: StreamInput): H3MFile {
  return parse<H3MFile>(h3mFile, data)
}

export function parseH3MFile(data: Uint8Array): H3MFile {
  const content = inflate(data)
  return parseH3M(content)
}

export function parseAsset<T>(type: TagOrWrapper<T>, data: StreamInput): T {
  return parse(type, data)
}
