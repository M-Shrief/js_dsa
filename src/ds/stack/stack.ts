import { SignlyLinkedList } from '../linkedlist/singly';

export class Stack<T> {
  private list: SignlyLinkedList<T>;

  constructor() {
    this.list = new SignlyLinkedList<T>();
  }

  public getTop(): T | null {
    let top = this.list.getHead();
    if (!top) return null;
    return top.data;
  }

  public getSize(): number {
    return this.list.getSize();
  }

  public push(data: T) {
    return this.list.addFirst(data);
  }

  public pop(): T | null {
    return this.list.deleteFirst();
  }
}
