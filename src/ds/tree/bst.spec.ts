import { describe, expect, test } from 'vitest';
import { BSNode, BST } from './bst';

describe.concurrent('Testing Binary Search Tree (BST)', async () => {
  /**
     * if we inserted 5,2,1,3,7,6,8
     * Tree should Look like this:
            5
        2		7
      1	  3	  6    8
     */
  test('Testing insert', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let root = tree.getRoot();
    expect(root?.val).not.toEqual(null);
    expect(root?.val).toEqual(5);

    expect(root?.left?.val).toEqual(2);
    expect(root?.right?.val).toEqual(7);

    expect(root?.left?.left?.val).toEqual(1);
    expect(root?.left?.right?.val).toEqual(3);

    expect(root?.right?.left?.val).toEqual(6);
    expect(root?.right?.right?.val).toEqual(8);
  });

  test('Testing search', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let three = tree.search(3);
    expect(three?.val).toBe(3);

    let nonExisting = tree.search(10);
    expect(nonExisting).toBe(null);

    let six = tree.search(6);
    expect(six?.val).toBe(6);
  });

  test('Testing getParent', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let twoParent = tree.getParent(2);
    expect(twoParent?.val).toBe(5);

    let fiveParent = tree.getParent(5);
    expect(fiveParent).toBe(null);

    let sixParent = tree.getParent(6);
    expect(sixParent?.val).toBe(7);
  });

  test('Testing maximum', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let maximum = tree.maximum();
    expect(maximum).toBe(8);
  });

  test('Testing minimum', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let minimum = tree.minimum();
    expect(minimum).toBe(1);
  });

  test('Testing delete', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    tree.delete(2);
    let two = tree.search(2);
    expect(two).toBe(null);
    let replacement = tree.getRoot()?.left;
    expect(replacement?.val).toBe(1);
    expect(replacement?.right?.val).toBe(3);
    expect(tree.getSize()).toBe(6);

    tree.delete(1);
    let one = tree.search(1);
    expect(one).toBe(null);
    let replacement2 = tree.getRoot()?.left;
    expect(replacement2?.val).toBe(3);
    expect(replacement2?.right).toBe(null);
    expect(tree.getSize()).toBe(5);

    tree.delete(0); // delete non-existing value
    expect(tree.getSize()).toBe(5);

    tree.delete(3);
    let three = tree.search(3);
    expect(three).toBe(null);
    let replacement3 = tree.getRoot()?.left;
    expect(replacement3).toBe(null);
    expect(tree.getSize()).toBe(4);

    tree.delete(8);
    let eight = tree.search(8);
    expect(one).toBe(null);
    let replacement4 = tree.getRoot()?.right?.right;
    expect(replacement4).toBe(null);
    expect(tree.getSize()).toBe(3);

    tree.delete(100); // delete non-existing value
    expect(tree.getSize()).toBe(3);

    tree.delete(5);
    let five = tree.search(5);
    expect(five).toBe(null);
    let replacement5 = tree.getRoot();
    expect(replacement5?.val).toBe(7);

    tree.delete(6);
    let six = tree.search(5);
    expect(six).toBe(null);
    let replacement6 = tree.getRoot();
    expect(replacement6?.right).toBe(null);

    tree.delete(7);
    let seven = tree.search(7);
    expect(seven).toBe(null);
    let replacement7 = tree.getRoot();
    expect(replacement7).toBe(null);
  });

  test('Testing BFT', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    expect(tree.BFT()).toEqual([5, 2, 7, 1, 3, 6, 8]);
  });

  test('Testing BFS', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    expect(tree.BFS(2)).toEqual(tree.getRoot()?.left);

    expect(tree.BFS(8)).toEqual(tree.getRoot()?.right?.right);
  });

  test('Testing DFT', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    let preOrder = tree.DFT('preOrder');
    expect(preOrder).toEqual([5, 2, 1, 3, 7, 6, 8]);

    let preOrderX2 = tree.DFT('preOrder', (x: number) => x * 2);
    expect(preOrderX2).toEqual([5, 2, 1, 3, 7, 6, 8].map((x) => x * 2));

    let inOrder = tree.DFT('inOrder');
    expect(inOrder).toEqual([1, 2, 3, 5, 6, 7, 8]);
    let inOrderX2 = tree.DFT('inOrder', (x: number) => x * 2);
    expect(inOrderX2).toEqual([1, 2, 3, 5, 6, 7, 8].map((x) => x * 2));

    let postOrder = tree.DFT('postOrder');
    expect(postOrder).toEqual([1, 3, 2, 6, 8, 7, 5]);
    let postOrderX2 = tree.DFT('postOrder', (x: number) => x * 2);
    expect(postOrderX2).toEqual([1, 3, 2, 6, 8, 7, 5].map((x) => x * 2));
  });

  test('Testing DFS', async () => {
    let tree = new BST<number>();
    tree.insert(5);
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
    tree.insert(7);
    tree.insert(6);
    tree.insert(8);

    expect(tree.DFS(2, 'preOrder')).toEqual(tree.getRoot()?.left);
    expect(tree.DFS(2, 'inOrder')).toEqual(tree.getRoot()?.left);
    expect(tree.DFS(2, 'postOrder')).toEqual(tree.getRoot()?.left);

    expect(tree.DFS(8, 'preOrder')).toEqual(tree.getRoot()?.right?.right);
    expect(tree.DFS(8, 'inOrder')).toEqual(tree.getRoot()?.right?.right);
    expect(tree.DFS(8, 'postOrder')).toEqual(tree.getRoot()?.right?.right);
  });
});
