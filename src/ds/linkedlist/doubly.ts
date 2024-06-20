
class DoublyNode<T>{
    public data: T;
    public prev: DoublyNode<T> | null;
    public next: DoublyNode<T> | null;

    constructor(data: T) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

export class DoublyLinkedList<T> {
    private size: number;
    private head: DoublyNode<T> | null;
    private tail: DoublyNode<T> | null;

    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    public getSize(): number {
        return this.size;
    }

    public getHead(): DoublyNode<T> | null {
        return this.head;
    }

    public getTail(): DoublyNode<T> | null {
        if (this.size <= 1) return this.head
        return this.tail;
    }

    public getNode(position: number): DoublyNode<T> | null {
        if(position < 0 || position >= this.size) return null;
        
        if(position == 0) return this.head;
        
        if(position == this.size -1) return this.tail;

        let current = this.head;
        for(let count = 0; count < position; count++) {
            current = current!.next;
        }
        return current;
    }

    public addFirst(val: T) {
        let doubly = new DoublyNode<T>(val);
        if (this.size == 0) {
            this.head = doubly;
        } else {
            doubly.next = this.head;
            this.head!.prev = doubly;
            this.head = doubly
            if(this.size == 1) {
                this.tail = doubly.next
            }
        }
        this.size++;
    }

    public addLast(val :T) {
        if (this.size == 0) return this.addFirst(val);
        
        let doubly = new DoublyNode<T>(val);
        this.getTail()!.next = doubly;
        doubly.prev = this.getTail();
        this.tail = doubly;

        this.size++;
    }

    public deleteFirst(): T | null {
        if(this.size == 0) return null;
        
        let node = this.head;
        
        if(this.size == 1) {
            this.head = null;
            this.tail = null;

            this.size--;
            return node!.data;
        }

        this.head = node!.next;
        this.head!.prev = null;
        this.size--;

        return node!.data;
    }

    public deleteLast(): T | null {
        if(this.size == 0) return null;
        if(this.size == 1) return this.deleteFirst();

        let node = this.tail;
        this.tail = node!.prev;
        this.tail!.next = null;

        this.size--;
        return node!.data;
    }

    public deleteByPosition(position: number): T | null {
        if(position < 0 || position >= this.size) return null;
        if(position == 0) return this.deleteFirst();
        if(position == this.size-1) return this.deleteLast();

        let current = this.head;
        for(let count = 0; count < position-1; count++) {
            current = current!.next;
        }

        let removed = current!.next
        current!.next = current!.next!.next;
        current!.next!.prev = current;

        this.size--;
        return removed!.data
    }
    
    public deleteByNode(node: DoublyNode<T>): T | null {
        if (node == this.head) return this.deleteFirst();
        if (node == this.tail) return this.deleteLast();

        node.prev!.next = node.next
        node.next!.prev = node.prev;
        node.next = null;
        node.prev = null;

        this.size--;
        return node.data;
    }

    public reverse() {
        let prev: DoublyNode<T> | null = null, next: DoublyNode<T> | null = null;
        let current = this.head;
        
        while(current != null) {
            next = current.next;
            current.next = prev;
            current.prev = next;

            prev = current;
            current = next
        }

        this.head = prev;
    }

    public getArray(): T[] {
        let arr: T[] = [];
        if(this.size == 0) return arr;
        let current = this.head;
        
        arr.push(current!.data);
        while (current?.next != null) {
            current = current.next;
            arr.push(current.data);
        }
        return arr;
    }
}