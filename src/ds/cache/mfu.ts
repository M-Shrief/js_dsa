import { Heap } from "../heap/heap";

class MFUNode<T>{
    public key: string;
    public val: T;
    public freq: number;
  
    constructor(key: string, val: T) {
      this.key = key;
      this.val = val;
      this.freq = 0;
    }
}

export class MFU<T> {
    private mh: Heap<MFUNode<T>>;
    private size: number;
    private capacity: number;
    private storage: Map<string, MFUNode<T>>;
    private isMoreFreq = (a: MFUNode<T>, b: MFUNode<T>): boolean =>
      a.freq > b.freq;

    constructor(capacity: number) {
        this.mh = new Heap<MFUNode<T>>(this.isMoreFreq)
        this.storage = new Map<string, MFUNode<T>>()
        this.capacity = capacity
        this.size = 0
    }

    public getSize(): number {
        return this.size
    }

    public getTop(): T {
        return this.mh.getTop().val
    }

    public put(key: string, value: T) {
        let newNode = new MFUNode<T>(key,value)

        if(this.size == this.capacity) {
            this.evict()
        }
        
        this.mh.push(newNode)
        this.storage.set(key, newNode)
        this.size++
        return
    }

    private evict() {
        if (this.getSize() == 0) return;
    
        let n = this.mh.getTop();
        this.mh.pop();
        this.storage.delete(n!.key);
    
        this.size--;
        return;
    }

    public get(key: string): T | null {
        if(this.size == 0) return null
        
        let n = this.storage.get(key)
        if(!n) return null

        // 1- Delete the node
        // 2- Increase it's freq
        // 3- Push it again and the heap correct its position
        this.mh.delete(n)
        n.freq++
        this.mh.push(n)

        return n.val
    }
}