import { describe, expect, test } from 'vitest';
import { DoublyLinkedList } from './doubly';

describe.concurrent('Testing SinglyLinkedList', async () => {
  test('Testing addFirst()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.getHead()?.data).toBe(4);
    expect(list.getNode(1)?.data).toBe(3);
    expect(list.getTail()?.data).toBe(1);
  });

  test('Testing addLast()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addLast(1);
    list.addLast(2);
    list.addLast(3);
    list.addLast(4);

    expect(list.getHead()?.data).toBe(1);
    expect(list.getNode(1)?.data).toBe(2);
    expect(list.getTail()?.data).toBe(4);
  });

  test('Testing deleteFirst()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteFirst()).toBe(4);
    expect(list.deleteFirst()).toBe(3);
  });

  test('Testing deleteLast()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteLast()).toBe(1);
    expect(list.deleteLast()).toBe(2);
  });

  test('Testing deleteByPosition(position)', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.deleteByPosition(1)).toBe(3);
    expect(list.deleteByPosition(2)).toBe(1);
    expect(list.deleteByPosition(2)).toBe(null);
  });

  test('Testing deleteByNode(node)', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    let n1 = list.getNode(2);
    expect(list.deleteByNode(n1!)).toBe(2);
    let n2 = list.getNode(2);
    expect(list.deleteByNode(n2!)).toBe(1);
  });

  test('Testing reverse()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    list.reverse();
    expect(list.getArray()).toEqual([1, 2, 3, 4]);

    let n = list.getNode(2);
    expect(n?.data).toEqual(3);
    expect(n?.next?.data).toEqual(4);
    expect(n?.prev?.data).toEqual(2);
  });

  test('Testing getArray()', async () => {
    let list = new DoublyLinkedList<number>();
    list.addFirst(1);
    list.addFirst(2);
    list.addFirst(3);
    list.addFirst(4);

    expect(list.getArray()).toEqual([4, 3, 2, 1]);
  });
});
