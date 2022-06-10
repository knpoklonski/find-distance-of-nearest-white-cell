
import {Algo} from './algo';

class App {

    printResult(bitmap: number [][]){
        // for(let i = 0; i < bitmap.length; i++){
        //     for(let j= 0; j < bitmap[i].length; j++){
        //         console.log('%d,', bitmap[i][j])
        //     }
        //     console.log('\n');
        // }

        console.log(bitmap);
    }

    main(){
        // var arguments = process.argv;
        // var numberOfTestCases = Number.parseInt(arguments[0]);
        // for(var i=0; i< numberOfTestCases; i++){
        //     var n = Number.parseInt(arguments)
        // }

        const algo = new Algo();
        const bitmap: number [][] = [
            [0, 0, 0, 1],
            [0, 0, 1, 1],
            [0, 1, 1, 0]
        ]

        let result = algo.findDistanceOfNearestWhiteCell(bitmap);
        this.printResult(result);
    }
}

const app = new App();
app.main();





