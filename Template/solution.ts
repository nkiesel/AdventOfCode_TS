import { describe, expect, test } from 'vitest'
import { readData } from '../utils'

const sample: string[] = `
`.trim().split('\n')


function part1(input: string[]): number {
    return 0
}

function part2(input: string[]): number {
    return 0
}

describe('Day ', () => {
    const input = readData(__dirname)

    test('part 1', () => {
        expect(part1(sample)).toBe(0)
        expect(part1(input)).toBe(0)
    })

    test('part 2', () => {
        expect(part2(sample)).toBe(0)
        expect(part2(input)).toBe(0)
    })
})
