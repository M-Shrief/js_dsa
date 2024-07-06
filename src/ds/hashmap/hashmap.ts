export class Node<T> {
  public key: string;
  public value: T;
  public next: Node<T> | null;

  constructor(key: string, value: T) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class HashMap<T> {
  private capacity: number;
  private size: number;
  private map: { [key: number]: Node<T> };

  constructor(capacity: number) {
    this.capacity = capacity;
    this.size = 0;
    this.map = {};
  }

  /**
   * @link https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
   * @param {string} key
   * @returns
   */
  private hash(key: string): number {
    var hash = 0,
      i,
      chr;
    if (key.length === 0) return hash;
    for (i = 0; i < key.length; i++) {
      chr = key.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  }

  public async put(key: string, val: T): Promise<string | null> {
    if (this.size == this.capacity) return null;

    let hash = await this.hash(key);
    let hmNode = this.map[hash];
    if (!hmNode) {
      let newNode = new Node<T>(key, val);
      newNode.next = hmNode;

      this.map[hash] = newNode;
    } else {
      this.map[hash] = new Node<T>(key, val);
    }

    this.size++;
    return key;
  }

  public async get(key: string): Promise<T | null> {
    if (this.size == 0) return null;

    let hash = await this.hash(key);
    return this.getHelper(key, hash);
  }

  private getHelper(key: string, hash: number): T | null {
    let hmNode = this.map[hash];
    if (hmNode == null) return null;

    if (hmNode.key == key) return hmNode.value;

    let inList = this.traverse(hmNode, key);
    if (!inList) return null;
    return inList.value;
  }

  private traverse(node: Node<T> | null, key: string): Node<T> | null {
    let current = node;
    if (!current) return null;

    if (current.key == key) return current;

    return this.traverse(current.next, key);
  }
}
