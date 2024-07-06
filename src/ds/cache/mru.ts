import { DoublyLinkedList, DoublyNode } from '../linkedlist/doubly';

class Item<T> {
  public key: string;
  public value: T;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
  }
}

export class MRU<T> {
  private dl: DoublyLinkedList<Item<T>>;
  private capacity: number;
  private storage: Map<string, DoublyNode<Item<T>>>;

  constructor(capacity: number) {
    this.dl = new DoublyLinkedList<Item<T>>();
    this.capacity = capacity;
    this.storage = new Map<string, DoublyNode<Item<T>>>();
  }

  public getSize(): number {
    return this.dl.getSize();
  }

  public getTop(): T | null {
    let top = this.dl.getHead();
    if (!top) return null;
    return top.data.value;
  }

  public put(key: string, value: T) {
    let newNode = new Item<T>(key, value);

    if (this.getSize() == this.capacity) {
      this.evict();
    }
    this.dl.addFirst(newNode);
    this.storage.set(key, this.dl.getHead()!);
    return;
  }

  private evict() {
    if (this.getSize() == 0) return;
    let n = this.dl.deleteLast();
    this.storage.delete(n!.key);
    return;
  }

  public get(key: string): T | null {
    if (this.getSize() == 0) return null;

    let n = this.storage.get(key);
    if (!n) return null;

    this.dl.deleteByNode(n);
    this.dl.addLast(n.data);

    return n.data.value;
  }
}
