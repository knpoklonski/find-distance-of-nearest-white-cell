
import { Algo } from './algo';

class App {

    main(input: string) {
        const algo = new Algo();
        var data = input.split('\n');
        var numberOfTestCases = Number.parseInt(data[0]);
        var line = 1;
        for (let t = 0; t < numberOfTestCases; t++) {
            let size = data[line].split(' ');
            let n = Number.parseInt(size[0]), 
                m = Number.parseInt(size[1]);
            line++;

            let bitmap : number [][] = [];
            for(let i = 0; i < n; i++){
                bitmap[i] = [];
                var values = data[line];
                for(let j = 0; j < m; j++){
                    bitmap[i][j] = Number.parseInt(values[j]);
                }
                line++;
            }

            let result = algo.findDistanceOfNearestWhiteCell(bitmap);
            this.printResult(result);
        }
        process.exit();
    }

    printResult(bitmap: number[][]) {
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
});






