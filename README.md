# Advent of Code in Typescript

This is a simple framework for solving [Advent of Code] (aka AoC) puzzles using Typescript.

Every day, AoC publishes a new puzzle in 2 parts. The second part is only accessible once you solved the first part. 
Together with the puzzle, AoC provides a user-specific input file for the puzzle. Thus, this repo has a separate 
directory for each day which contains both the input file and the solution code. The solution code uses simple unit 
tests for executing the code and capturing the expected answer. Thus, to solve a new puzzle

1. Copy the `Template` directory to `2022/Day02` (or whatever the year and day number is)
2. Download the input file the day and store it in `2022/Day02/input` (again adjusting the day number)
3. Add your solution for part 1 to `2022/Day02/solution.ts`
4. Submit the correct answer for part 1 to AoC
5. Repeat steps 3 and 4 for part 2
6. Enjoy!

## Setup

Make sure to have a recent NodeJs version installed (version 16 or higher), and then run `npm i`. Then sign up for 
AoC to get access to the personalized puzzle inputs.

# Command line execution

Running `npm test` will execute all the existing tests.

# IDE support

For IntelliJ Ultimate, the built-in debugging support should allow to directly execute individual tests. For VS-Code,
you should first install the `Vitest` extension from the official Vs-Code extension marketplace.

[Advent of Code]: https://adventofcode.com/