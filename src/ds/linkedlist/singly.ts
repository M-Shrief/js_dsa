export class SinglyNode<T> {
  public data: T;
  public next: SinglyNode<T> | null;

  constructor(data: T, next?: SinglyNode<T> | null) {
    this.data = data;
    this.next = next || null;
  }
}

export class SignlyLinkedList<T> {
  private size: number;
  private head: SinglyNode<T> | null;
  private tail: SinglyNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  public getSize(): number {
    return this.size;
  }

  public getHead(): SinglyNode<T> | null {
    return this.head;
  }

  public getTail(): SinglyNode<T> | null {
    if (this.size <= 1) return this.head;
    return this.tail;
  }

  public getNode(position: number): SinglyNode<T> | null {
    if (position < 0 || position >= this.size) return null;

    if (position == 0) return this.head;

    if (position == this.size - 1) return this.getTail();

    let current = this.head;
    for (let count = 0; count < position; count++) {
      current = current!.next;
    }
    return current;
  }

  public addFirst(val: T) {
    let singlyNode = new SinglyNode(val);

    if (this.size == 0) {
      this.head = singlyNode;
      this.tail = singlyNode;
    } else {
      singlyNode.next = this.head;
      this.head = singlyNode;
    }
    this.size++;
  }

  public addLast(val: T) {
    if (this.size == 0) {
      this.addFirst(val);
      return;
    }

    let singlyNode = new SinglyNode(val);
    this.tail!.next = singlyNode;
    this.tail = singlyNode;
    this.size++;
  }

  public deleteFirst(): T | null {
    if (this.head == null) {
      return null;
    }

    let current = this.head;
    if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = current.next;
    }

    this.size--;
    return current.data;
  }

  public deleteLast(): T | null {
    return this.deleteNode(this.size - 1);
  }

  public deleteNode(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    if (position == 0) {
      return this.deleteFirst();
    }

    let current = this.head;
    for (let count = 0; count < position - 1; count++) {
      current = current!.next;
    }

    let removed = current!.next!.data;
    current!.next = current!.next!.next;
    this.size--;

    return removed;
  }

  public reverse() {
    let prev: SinglyNode<T> | null = null,
      next: SinglyNode<T> | null = null;
    let current = this.head;

    while (current != null) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    this.head = prev;
  }

  public getArray(): T[] {
    let arr: T[] = [];
    if (this.size == 0) return arr;
    let current = this.head;

    arr.push(current!.data);
    while (current?.next != null) {
      current = current.next;
      arr.push(current.data);
    }
    return arr;
  }
}
