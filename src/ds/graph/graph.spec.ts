import { describe, test, expect } from 'vitest';
import { Graph } from './graph';

describe.concurrent('Testing Graph', async () => {
  test('Testing BFT()', async () => {
    const g = new Graph<number>();

    
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    expect(g.BFT(0)).toEqual([0, 1, 2, 3]);
    expect(g.BFT(1)).toEqual([1, 2, 0, 3]);
    expect(g.BFT(2)).toEqual([2, 0, 3, 1]);
  });

  test('Testing DFT()', async () => {
    // Create a graph
    const g = new Graph<number>();
    
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(2, 3);
    g.addEdge(3, 3);

    expect(g.DFT(0)).toEqual([0, 1, 2, 3]);
    expect(g.DFT(1)).toEqual([1, 2, 0, 3]);
    expect(g.DFT(2)).toEqual([2, 0, 1, 3 ]);
    expect(g.DFT(3)).toEqual([3]);
  });
});
