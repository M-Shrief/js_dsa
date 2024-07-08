import { describe, test, expect } from 'vitest';
import { Graph } from './graph';

describe.concurrent('Testing Graph', async () => {
  describe("Directed Graph", async() => {
    test('Testing BFT()', async () => {
      const g = new Graph<number>(false);
      
      g.addEdge(0, 1);
      g.addEdge(0, 2);
      g.addEdge(1, 2);
      g.addEdge(2, 0);
      g.addEdge(2, 3);
      g.addEdge(3, 3);
      g.addEdge(3, 4);
      g.addEdge(5, 4);
  
      expect(g.BFT(0)).toEqual([0, 1, 2, 3, 4]);
      expect(g.BFT(1)).toEqual([1, 2, 0, 3, 4]);
      expect(g.BFT(2)).toEqual([2, 0, 3, 1, 4]);
      expect(g.BFT(4)).toEqual([4]);
    });
  
    test('Testing DFT()', async () => {
      // Create a graph
      const g = new Graph<number>(false);
      
      g.addEdge(0, 1);
      g.addEdge(0, 2);
      g.addEdge(1, 3);
      g.addEdge(2, 0);
      g.addEdge(2, 3);
      g.addEdge(3, 3);
      g.addEdge(3, 4);
      g.addEdge(4, 5);
  
      expect(g.DFT(0)).toEqual([0, 1, 3, 4, 5, 2]);
      expect(g.DFT(1)).toEqual([1, 3, 4, 5]);
      expect(g.DFT(2)).toEqual([2, 0, 1, 3, 4, 5]);
      expect(g.DFT(3)).toEqual([3, 4, 5]);
    });  
  })

  describe("Undirected Grah", async() => {
    test('Testing BFT()', async () => {
      const g = new Graph<number>(true);
      
      g.addEdge(0, 1);
      g.addEdge(0, 2);
      g.addEdge(1, 2);
      g.addEdge(2, 0);
      g.addEdge(2, 3);
      g.addEdge(3, 3);
      g.addEdge(3, 4);
      g.addEdge(5, 4);
  
      expect(g.BFT(0)).toEqual([0, 1, 2, 3, 4, 5]);
      expect(g.BFT(1)).toEqual([1, 0, 2, 3, 4, 5]);
      expect(g.BFT(2)).toEqual([2, 0, 1, 3, 4, 5]);
      expect(g.BFT(4)).toEqual([4, 3, 5, 2, 0, 1]);
    });
  
    test('Testing DFT()', async () => {
      // Create a graph
      const g = new Graph<number>(true);
      
      g.addEdge(0, 1);
      g.addEdge(0, 2);
      g.addEdge(1, 3);
      g.addEdge(2, 0);
      g.addEdge(2, 3);
      g.addEdge(3, 3);
      g.addEdge(3, 4);
      g.addEdge(4, 5);
  
      expect(g.DFT(0)).toEqual([0, 1, 3, 2, 4, 5]);
      expect(g.DFT(1)).toEqual([1, 0, 2, 3, 4, 5]);
      expect(g.DFT(2)).toEqual([2, 0, 1, 3, 4, 5]);
      expect(g.DFT(3)).toEqual([3, 1, 0, 2, 4, 5]);
    });  
  })
});
