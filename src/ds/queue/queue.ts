import { SignlyLinkedList } from '../linkedlist/singly';

export class Queue<T> {
  private list: SignlyLinkedList<T>;

  constructor() {
    this.list = new SignlyLinkedList<T>();
  }

  public getFirst(): T | null {
    let first = this.list.getHead();
    if (!first) return null;
    return first.data;
  }

  public getSize(): number {
    return this.list.getSize();
  }

  public enqueue(data: T) {
    this.list.addLast(data);
  }

  public dequeue(): T | null {
    return this.list.deleteFirst();
  }
}
