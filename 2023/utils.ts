import * as fs from 'fs'
import * as path from 'path'

export {}

declare global {
    interface Array<T> {
        chunkedBy(predicate: (t: T, index?: number) => boolean): T[][]
    }
}

Array.prototype.chunkedBy = function <T>(predicate: (item: T, index?: number) => boolean): T[][] {
    const result: T[][] = [[]]
    for (const [index, item] of this.entries()) {
        if (predicate(item, index)) {
            result.push([])
        } else {
            result[result.length - 1].push(item)
        }
    }
    return result
}

export const readData = (dir: string): string[] => fs.readFileSync(path.join(dir, 'input'), 'utf8').split('\n')
