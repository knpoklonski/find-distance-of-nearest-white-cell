
import { Algo } from './algo';
import { Parser } from './parser'
import { ParsingError } from './parsingError'
class App {

    main(input: string) {
        const algo = new Algo();
        const parser = new Parser();
        try {
            const testCases = parser.parse(input);
            testCases.forEach(bitmap => {
                const result = algo.findDistanceOfNearestWhiteCell(bitmap);
                this.printResult(result);
            })
        } catch (_e) {
            const e = _e as ParsingError;
            if (e !== null) {
                process.stdout.write(e.getErrorMessage());
            } else {
                throw _e;
            }
        }
    }

    private printResult(bitmap: number[][]) {
        bitmap.forEach((row) => {
            row.forEach((cell) => {
                process.stdout.write(`${cell} `);
            });
            process.stdout.write('\n');
        });
    }
}

const app = new App();

process.stdin.resume();
process.stdin.setEncoding("utf-8");
let stdinInput = "";

process.stdin.on("data", (input) => {
    stdinInput += input;
});

process.stdin.on("end", () => {
    app.main(stdinInput);
    process.exit();
});