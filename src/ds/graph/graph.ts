import { Queue } from '../queue/queue';

// Class to represent a graph using adjacency list
export class Graph<T> {
  private adjList: Map<T, Array<T>>;
  private isDirected: boolean;

  constructor(isDirected: boolean) {
    this.adjList = new Map<T, Array<T>>();
    this.isDirected = isDirected;
  }

  // Function to add an edge to the graph
  addEdge(n1: T, n2: T) {
    if (!this.adjList.has(n1)) this.adjList.set(n1, []);
    this.adjList.get(n1)?.push(n2);
    if(this.isDirected) {
      if (!this.adjList.has(n2)) this.adjList.set(n2, []);
      this.adjList.get(n2)?.push(n1);
    }
  }

  // Function to perform Breadth First Search on a graph represented using adjacency list
  BFT(startNode: T): T[] {
    // Create a queue for BFS
    const list: T[] = [];
    const queue = new Queue<T>();
    const visited = new Map<T, boolean>();
    // const visited = new Array(this.adjList.size).fill(false);

    // Mark the current node as visited and enqueue it
    visited.set(startNode, true);
    queue.enqueue(startNode);

    // Iterate over the queue
    while (queue.getSize() !== 0) {
      // Dequeue a vertex from queue and print it
      const currentNode = queue.dequeue()!;
      list.push(currentNode);

      // Get all adjacent vertices of the dequeued vertex currentNode
      // If an adjacent has not been visited, then mark it visited and enqueue it
      for (const neighbor of this.adjList.get(currentNode!) || []) {
        if (!visited.get(neighbor)) {
          visited.set(neighbor, true);
          queue.enqueue(neighbor);
        }
      }
    }
    return list;
  }

  // The function to do DFS traversal.
  // It uses recursive Util
  DFT(n: T): T[] {
    let nEdges = this.adjList.get(n)?.length;
    if(!nEdges) return [];
    let list: T[] = [];
    let visited = new Map<T, boolean>();
    // Call the recursive helper
    // function to print DFS
    // traversal
    return this.dfs(n, visited, list);
  }

  // A function used by DFS
  private dfs(n: T, visited: Map<T, boolean>, list: T[]): T[] {
    // Mark the current node as visited and print it
    visited.set(n, true);
    list.push(n);
    // Recur for all the vertices adjacent to this
    // vertex
    for (let i of this.adjList.get(n) || []) {
      if (!visited.get(i)) this.dfs(i, visited, list);
    }
    return list;
  }
}
