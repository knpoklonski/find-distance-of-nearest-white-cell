
import { Algo } from './algo';
import { Parser } from './parser'
class App {

    main(input: string) {
        const algo = new Algo();
        const parser = new Parser();
        const testCases = parser.parse(input);

        testCases.forEach(bitmap => {
            const result = algo.findDistanceOfNearestWhiteCell(bitmap);
            this.printResult(result);
        })
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