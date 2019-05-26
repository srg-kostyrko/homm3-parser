import { parse, StreamInput, TagOrWrapper } from 'binary-markup'
import * as pako from 'pako'
import { h3mFile } from './parsers/h3m/h3m.bml'
import { H3MFile } from './parsers/h3m/contracts'

export * from './parsers/assets'
export * from './parsers/h3m/contracts'

export function parseH3M(data: StreamInput): H3MFile {
  return parse<H3MFile>(h3mFile, data)
}

export function parseH3MFile(data: Uint8Array): H3MFile {
  const content = pako.inflate(data)
  // Create a new ArrayBuffer instance and copy the data into it, in order
  // to work around https://github.com/facebook/jest/issues/6248
  const bufferCopy = new ArrayBuffer(content.buffer.byteLength)
  new Uint8Array(bufferCopy).set(new Uint8Array(content.buffer))
  return parseH3M(bufferCopy)
}

export function parseAsset<T>(type: TagOrWrapper<T>, data: StreamInput): T {
  return parse(type, data)
}
