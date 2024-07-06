import { describe, expect, test } from 'vitest';
import { SignlyLinkedList } from './singly';

describe.concurrent('Testing SinglyLinkedList', async () => {
  test('Testing addFirst()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.getHead()?.data).toBe(4);
    expect(list.getNode(1)?.data).toBe(3);
    expect(list.getTail()?.data).toBe(1);
  });

  test('Testing addLast()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);

    expect(list.getHead()?.data).toBe(1);
    expect(list.getNode(1)?.data).toBe(2);
    expect(list.getTail()?.data).toBe(4);
  });

  test('Testing deleteFirst()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteFirst()).toBe(4);
    expect(list.deleteFirst()).toBe(3);
  });

  test('Testing deleteLast()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteLast()).toBe(1);
    expect(list.deleteLast()).toBe(2);
  });

  test('Testing deleteNode(position)', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteNode(1)).toBe(3);
    expect(list.deleteNode(2)).toBe(1);
    expect(list.deleteNode(2)).toBe(null);
  });

  test('Testing reverse()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    list.reverse();
    expect(list.getArray()).toEqual([1, 2, 3, 4]);
    let n = list.getNode(2);
    expect(n?.data).toEqual(3);
    expect(n?.next?.data).toEqual(4);
  });

  test('Testing getArray()', async () => {
    let list = new SignlyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.getArray()).toEqual([4, 3, 2, 1]);
  });
});
