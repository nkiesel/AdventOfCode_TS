import { readData } from '../utils'

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
    const sum = (acc: number, n: number) => acc + n
    const toInt = (n: string) => parseInt(n, 10)

    return input.join('\n').split('\n\n')
        .map((l) => l.split('\n').map(toInt).reduce(sum, 0))
        .sort((n1, n2) => n2 - n1)
        .slice(0, 3)
        .reduce(sum, 0)
}

function part1_2(input: string[], top: number): number {
    const sum = (acc: number, n: number) => acc + n
    const toInt = (n: string) => parseInt(n, 10)

    return input.join('\n').split('\n\n')
        .map((l) => l.split('\n').map(toInt).reduce(sum, 0))
        .sort((n1, n2) => n2 - n1)
        .slice(0, top)
        .reduce(sum, 0)
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
