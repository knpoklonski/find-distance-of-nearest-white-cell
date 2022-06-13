import {ParsingError} from "./parsingError"

type TestCase = number[][];

export class Parser {
    parse(input: string): TestCase[] {
        const result: TestCase[] = [];
        const data = input.split('\n');

        this.throwIfNotCorrectNumberOfTestCases(data[0], 0)
        const numberOfTestCases = Number.parseInt(data[0], 10);

        let line = 1;
        for (let t = 0; t < numberOfTestCases; t++) {
            this.throwIfNotNotCorrectBitMapSize(data[line], line);
            const size = data[line].split(' ');
            const n = Number.parseInt(size[0], 10);
            const m = Number.parseInt(size[1], 10);
            line++;

            const bitmap: number[][] = [];
            for (let i = 0; i < n; i++) {
                bitmap[i] = [];
                this.throwIfNotZerosOrOnces(data[line], line);
                const values = data[line];
                for (let j = 0; j < m; j++) {
                    bitmap[i][j] = Number.parseInt(values[j], 10);
                }
                line++;
            }
            result.push(bitmap);
        }
        return result;
    }

    private throwIfNotZerosOrOnces(str: string, line: number) {
        if (!this.isZeroOrOne(str)) {
            throw new ParsingError("Invalid values for bitmap, allowed only 0 and 1", line);
        }
    }

    private throwIfNotCorrectNumberOfTestCases(str: string, line: number) {
        if (!this.isPositiveIntNumber(str)) {
            throw new ParsingError("Invalid number of test cases", line)
        }
        if (str === "0") {
            throw new ParsingError("Invalid number of test cases", line)
        }
    }

    private throwIfNotNotCorrectBitMapSize(str: string, line: number) {
        const size = str.split(' ');
        if (size.length !== 2) {
            throw new ParsingError("Invalid size of bitmap", line)
        }
        if (!this.isPositiveIntNumber(size[0]) || !this.isPositiveIntNumber(size[1])) {
            throw new ParsingError("Invalid size of bitmap", line)
        }
    }

    private isPositiveIntNumber(str: string) {
        return str.match(/^\d+$/);
    }

    private isZeroOrOne(str: string) {
        return str.match(/^[0-1]+$/);
    }
}

