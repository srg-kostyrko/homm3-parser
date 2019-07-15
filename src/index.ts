import { parse, StreamInput, TagOrWrapper } from 'binary-markup'
import * as pako from 'pako'
import { h3mFile } from './parsers/h3m/h3m.bml'
import { H3MFile } from './parsers/h3m/contracts'

export * from './parsers/assets'
export * from './parsers/h3m/contracts'
export * from './parsers/h3m/constants'

export function parseH3M(data: StreamInput): H3MFile {
  return parse<H3MFile>(h3mFile, data)
}

export function parseH3MFile(data: Uint8Array): H3MFile {
  const content = pako.inflate(data)
  return parseH3M(content.buffer)
}

export function parseAsset<T>(type: TagOrWrapper<T>, data: StreamInput): T {
  return parse(type, data)
}
