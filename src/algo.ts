import { Graph } from './graph'
import { Queue } from 'typescript-collections';

export class Algo {
    public findDistanceOfNearestWhiteCell(bitmap: number[][]): number[][] {
        if (bitmap.length == 0) {
            return [];
        }

        let n = bitmap.length,
            m = bitmap[0].length;

        // create graph, each cell in bitmap is a node, all nearest cells are edges
        let graph = this.createGraph(bitmap);

        // to store minimum distance for each node in graph
        let distance : number [] = [];

        // to mark each node as visited or not in BFS
        let visited : boolean [] = [];

        // init the value of distance and visit
        for (let i = 1; i <= n * m; i++) {
            distance[i] = Number.MAX_SAFE_INTEGER;
            visited[i] = false;
        }

        // inserting nodes whose value in matrix
        // is 1(white) in the queue
        let k = 1;
        let queue = new Queue<number>();
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (bitmap[i][j] == 1) {
                    distance[k] = 0;
                    visited[k] = true;
                    queue.enqueue(k);
                }
                k++;
            }
        }

        this.breadthFirstSearch(graph, visited, distance, queue)
        return this.toBitmap(distance, n, m);
    }


    private createGraph(bitmap: number[][]): Graph<number> {
        function comparator(a: number, b: number) {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        }

        let graph = new Graph(comparator);

        let k = 1;  // number to be assigned to a cell 

        let n = bitmap.length,
            m = bitmap[0].length;

        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= m; j++) {
                // if last row, then add edge on right side. 
                if (i == n) {
                    // if not bottom right cell. 
                    if (j != m) {
                        graph.addEdge(k, k + 1);
                        graph.addEdge(k + 1, k)
                    }
                }
                // if last column, then add edge toward down
                else if (j == m) {
                    graph.addEdge(k, k + m);
                    graph.addEdge(k + m, k)
                }
                // else make edge in all direction
                else {
                    graph.addEdge(k, k + 1);
                    graph.addEdge(k + 1, k);
                    graph.addEdge(k, k + m);
                    graph.addEdge(k + m, k)
                }

                k++;
            }
        }

        return graph;
    }

    // convert array of result distance to bitmap
    private toBitmap(distance:number[], n: number, m :number) : number[][]{
        let result: number [][] = [];
        var k = 1;
        for(let i=0;i<n; i++){
            result[i]= [];
            for(let j=0;j<m; j++){
                result[i][j] = distance[k];
                k++;
            }
        }

        return result;
    }

    private breadthFirstSearch(graph: Graph<number>, visited: boolean [], distance: number[], queue: Queue<number>): void {
        while (!queue.isEmpty()) {
            let nodeNumber = queue.dequeue() ?? -1;
            let node = graph.nodes.get(nodeNumber);
            if (!node) continue;
            node.adjacent.forEach((item) => {
                if (!visited[item.data]) {
                    distance[item.data] = Math.min(distance[item.data], distance[node!.data] + 1);
                    queue.add(item.data);
                    visited[item.data] = true;
                }
            });
        }
    }
}