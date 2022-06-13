
import { Algo } from './algo';
import {Parser} from './parser'
class App {

    main(input: string) {
        const algo = new Algo();
        const parser = new Parser();
        var testCases = parser.parse(input);
    
        testCases.forEach(bitmap => {
            let result = algo.findDistanceOfNearestWhiteCell(bitmap);
            this.printResult(result);
        })
    }

    private printResult(bitmap: number[][]) {
        for (let i = 0; i < bitmap.length; i++) {
            for (let j = 0; j < bitmap[i].length; j++) {
                process.stdout.write(`${bitmap[i][j]} `);
            }
            process.stdout.write('\n');
        }
    }
}

const app = new App();

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    app.main(stdin_input);
    process.exit();
});






