export type CompareFunction<T> = (item1: T, item2: T) => boolean;

export class Heap<T> {
    private list: T[];
    private compareFn: CompareFunction<T>;

    constructor(compareFn: CompareFunction<T>) {
        this.list = []
        this.compareFn = compareFn;
    }

    private swap(id1: number, id2: number) {
        [this.list[id1], this.list[id2]] = [this.list[id2], this.list[id1]];
    }

    public getTop(): T {
        return this.list[0];
    }

    public getSize(): number {
        return this.list.length;
    }

    public delete(val: T): boolean {
        let i = 0;
        let found = false;
        while (i < this.list.length) {
            if(this.list[i] === val) {
                found = true;
                break;
            }
            i++
        }
        if(found) {
            this.swap(i, this.list.length - 1);
            this.list = this.list.slice(0,this.list.length -1)
            this.down(i)
            return true;
        }
        return false;
    }

    public push(val: T) {
        this.list.push(val);
        this.up(this.list.length-1)
    }

    public pop() {
        if (this.list.length == 0) return;

        this.swap(0, this.list.length - 1);
        this.list = this.list.slice(0,this.list.length -1)
        this.down(0)
    }

    private up(child: number) {
        if(child <= 0) return;
        let parent = (child - 1) >> 1;

        let comparison = this.compareFn(this.list[child], this.list[parent]);
        if(!comparison) return

        this.swap(child, parent);
        this.up(parent);
    }

    private down(parent: number) {
        let current = parent;

        let leftChild = (parent*2)+1, rightChild = (parent*2)+2;

        if(leftChild < this.list.length && this.compareFn(this.list[leftChild], this.list[current])) {
            current = leftChild;
        }

        if(rightChild < this.list.length && this.compareFn(this.list[rightChild], this.list[current])) {
            current = rightChild;
        }

        if (current == parent) return

        this.swap(current, parent);
        this.down(current)
    }
}