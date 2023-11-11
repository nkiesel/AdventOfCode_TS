import {readData} from '../utils'
import {isEmpty} from 'lodash'

const sample: string[] = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`.trim().split('\n')

function part1(input: string[]): number {
    let max = 0
    let elf = 0
    for (const l of input) {
        if (l) {
            elf += parseInt(l, 10)
        } else {
            if (elf > max) {
                max = elf
            }
            elf = 0
        }
    }
    return max
}

function part2(input: string[]): number {
    const add = (acc: number, n: number): number => acc + n
    const toInt = (n: string): number => parseInt(n, 10)
    const descending = (n1: number, n2: number) => n2 - n1

    return input.chunkedBy(isEmpty)
        .map((l) => l.map(toInt).reduce(add, 0))
        .sort(descending)
        .slice(0, 3)
        .reduce(add)
}

function part1_2(input: string[], top: number): number {
    const add = (acc: number, n: number): number => acc + n
    const toInt = (n: string): number => parseInt(n, 10)
    const descending = (n1: number, n2: number) => n2 - n1

    return input.chunkedBy(isEmpty)
        .map((l) => l.map(toInt).reduce(add, 0))
        .sort(descending)
        .slice(0, top)
        .reduce(add)
}

describe('Day 1', () => {
    const input = readData(__dirname)

    it('part 1', () => {
        expect(part1(sample)).toBe(24000)
        expect(part1(input)).toBe(67027)
    })

    it('part 2', () => {
        expect(part2(sample)).toBe(45000)
        expect(part2(input)).toBe(197291)
    })

    it('combined', () => {
        expect(part1_2(input, 1)).toBe(67027)
        expect(part1_2(input, 3)).toBe(197291)
    })
})

/*

My solution for part 1 was a very simple and direct translation from the requirements. Then for part 2, I started
thinking more in functional terms.  As very common for AoC, the solution for part 2 could then very easily be extended
to work for both part 1 and part 2, which is what part1_2 is.

In Kotlin, it is simple to extend existing classes using extension functions.  I finally found a similar solution
for Typescript after extended web searching. This resulted in the addition of `chunkedBy` for Typescript arrays.

*/
