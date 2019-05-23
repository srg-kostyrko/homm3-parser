import fs from 'fs'
import path from 'path'
import { parseH3MFile } from '../src'

export function testMap(title: string, fileName: string, dataGetter: Function): void {
  it(`should parse ${title}`, async () => {
    const file = await fs.promises.readFile(path.resolve(__dirname, 'maps', fileName))
    const map = parseH3MFile(file)
    expect(dataGetter(map)).toMatchSnapshot()
  })
}
