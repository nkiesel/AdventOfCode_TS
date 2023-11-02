import * as fs  from 'fs'
import * as path from 'path'

export const readData = (dir: string): string[] => fs.readFileSync(path.join(dir, 'input'), 'utf8').split('\n')
