# Advent of Code in Typescript

This is a simple framework for solving [Advent of Code] (aka [AoC]) puzzles using Typescript. To use it for your
solutions, fork this project on GitHub so that you can share your solutions.

Every day, [AoC] publishes a new puzzle in 2 parts. The second part is only accessible once you solved the first part. 
Together with the puzzle, [AoC] provides a user-specific input file for the puzzle. Thus, this repo has a separate 
directory for each day which contains both the input file and the solution code. The solution code uses simple unit 
tests for executing the code and capturing the expected answer. Thus, to solve a new puzzle, follow the below
instructions by replacing `2022/Day02` with the correct year and day:

1. Copy the `Template` directory to `2022/Day02`
2. Download the input file the day and store it in `2022/Day02/input`
3. Add your solution for part 1 to `2022/Day02/solution.ts`
4. Submit the correct answer for part 1 to [AoC]
5. Repeat steps 3 and 4 for part 2
6. Enjoy!


## Setup

Make sure to have a recent NodeJs version installed (version 16 or higher), and run `npm i`. Also sign up for 
[AoC] to get access to the personalized puzzle inputs.

This repo contains the solution for day 1 of 2022 for a personal input file. Thus, to get your 2 gold stars for that day,
you must

1. Download your input for day 1 and replace the content of `2022/Day01/input` with your downloaded data
2. Run the tests of `2022/Day01/solution.ts`, which will very likely fail due to the updated `input`
3. Replace the expected results with the actual results to fix the tests
4. Enter the results on [AoC]
5. You got your first 2 gold stars!!!


# Command line execution

Running `npm test` will execute all the existing tests.

# IDE support

### IntelliJ
For IntelliJ Ultimate, the built-in debugging support should allow to directly execute and debug individual tests. 

### VS-Code
For VS-Code, you should first install the [Jest (by Orta)] extension from the official Vs-Code extension marketplace.


[Advent of Code]: https://adventofcode.com/
[AoC]: https://adventofcode.com/
[Jest (by Orta)]: https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest
