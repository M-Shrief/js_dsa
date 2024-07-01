import {Heap} from '../heap/heap'

class LFUNode<T> {
    public key: string;
    public val: T;
    public freq: number;

    constructor(key: string, val: T, freq: number) {
        this.key = key;
        this.val = val;
        this.freq = freq;
    }
}

export class LFU<T> {
    private mh: Heap<LFUNode<T>>;
    private size: number;
    private capacity: number;
    private storage: Map<string, LFUNode<T>>
    private isSmaller = (a: LFUNode<T>, b: LFUNode<T>): boolean =>  a.freq < b.freq

    constructor(capacity: number) {
        this.mh = new Heap<LFUNode<T>>(this.isSmaller)
        this.size = 0;
        this.capacity = capacity;
        this.storage = new Map<string, LFUNode<T>>();
    }

    public getSize(): number {
        return this.size;
    }

    public getTop(): T {
        return this.mh.getTop().val
    }


    public put(key:string, value: T) {
        let newNode = new LFUNode<T>(key, value, 0);

        if (this.getSize() == this.capacity) {
            this.evict()
        }
        this.mh.push(newNode)
        this.storage.set(key, newNode);
        this.size++
        return    
    }

    private evict() {
        if(this.getSize() == 0) return;

        let n = this.mh.getTop()
        this.mh.pop()
        this.storage.delete(n!.key);

        this.size--
        return
    }

    public get(key: string): T | null {
        if (this.getSize() == 0) return null;
        
        let n = this.storage.get(key);
        if(!n) return null;

        // 1- Delete the node
        // 2- Increase it's freq
        // 3- Push it again and the heap correct its position
        this.mh.delete(n);
        n.freq++
        this.mh.push(n);

        return n.val;
    }
}