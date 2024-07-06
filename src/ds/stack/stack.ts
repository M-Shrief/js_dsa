import { SignlyLinkedList } from '../linkedlist/singly';

export class Stack<T> {
  private list: SignlyLinkedList<T>;
  private size: number;

  constructor() {
    this.list = new SignlyLinkedList<T>();
    this.size = this.list.getSize();
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
