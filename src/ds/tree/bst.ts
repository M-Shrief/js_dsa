import { Queue } from "../queue/queue";

export class BSNode<T> {
    public val: T;
    public left: BSNode<T> | null;
    public right: BSNode<T> | null;

    constructor(val: T) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class BST<T> {
    private root: BSNode<T> | null;
    private size: number;
    
    constructor() {
        this.root = null;
        this.size = 0;
    }

    public getSize(): number {
        return this.size;
    }

    public getRoot(): BSNode<T> | null {
        return this.root;
    }

    public insert(val: T) {
        if (this.size == 0) {
            let newNode = new BSNode<T>(val);
            this.root = newNode;
            this.size++
        } else {
            this.insertNode(this.root!, val)
        }
    }

    private insertNode(node: BSNode<T>, val: T) {
        if(val <= node.val) {
            if (node.left != null) {
                this.insertNode(node.left, val);
            } else {
                let newNode = new BSNode<T>(val);
                node.left = newNode;
                this.size++;
            }
        } else {
            if(node.right != null) {
                this.insertNode(node.right, val);
            } else {
                let newNode = new BSNode<T>(val);
                node.right = newNode;
                this.size++;
            }
        }
    }

    public search(data: T): BSNode<T> | null {
        if (this.size == 0) return null;
        return this.searchNode(this.root, data);
    }

    private searchNode(node: BSNode<T> | null, data: T): BSNode<T> | null {
        if (node == null) return null;
        
        if (data == node.val) return node;

        if(data < node.val) {
            return this.searchNode(node.left, data);
        } else {
            return this.searchNode(node.right, data)
        }
    }

    public getParent(data: T): BSNode<T> | null {
        if(this.size == 0) return null;
        return this.getParentNode(this.root, data);
    }

    public getParentNode(node: BSNode<T> | null, data: T): BSNode<T> | null {
        if(node == null || data == node.val) return null;

        if(data < node.val) {
            if (data == node.left?.val) return node;
            return this.getParentNode(node.left, data)
        } else {
            if (data == node.right?.val) return node;
            return this.getParentNode(node.right, data)
        }
    }

    public delete(data: T): boolean {
        if(this.size == 0) return false;
        
        if(this.size == 1)  {
            if (this.root?.val == data) {
                this.root = null;
                this.size--;
                return true;
            } else {
                return false
            }
        }

        let {isDeleted} = this.deleteNode(this.root, data)
        if(isDeleted) {
            this.size--;
        }
        return isDeleted;
    }

    private deleteNode(node: BSNode<T> | null, data: T): {node: BSNode<T> | null, isDeleted: boolean }{
        if(node == null) return {node: null, isDeleted: false};

        if(data < node.val) return this.deleteNode(node.left, data);
        if(data > node.val) return this.deleteNode(node.right, data);

        let ifLeftNodeExists = node.left != null;
        let ifRightNodeExists = node.right != null;

        // // if it have 2 childs:
        // // set node.val to the maximum child in the left subtree.
        // // then go back and delete that leaf key.
        if(ifLeftNodeExists && ifRightNodeExists) {
            let maximumValueInLeftSubTree = this.maximumNode(node.left!);
            node.left = this.deleteNode(node.left,maximumValueInLeftSubTree!).node
            node.val = maximumValueInLeftSubTree!;
            return {node, isDeleted: true};
        }

        let parent = this.getParent(node.val);
        if(ifLeftNodeExists) {
            if(parent) {
                if(parent.val >= node.val) {
                    parent.left = node.left;
                } else {
                    parent.right = node.left
                }
            } else {
                if(this.root!.val >= node.val) {
                    this.root = node.left;
                } else {
                    this.root = node.left
                }                // node = node.left;    
            }            
            return {node, isDeleted: true};
        } else if(ifRightNodeExists) {
            if(parent) {
                if(parent.val >= node.val) {
                    parent.left = node.right;
                } else {
                    parent.right = node.right
                }    
            } else {
                if(this.root!.val >= node.val) {
                    this.root = node.right;
                } else {
                    this.root = node.right
                }                
            }      
            return {node, isDeleted: true};
        } else {
            if(node.val <= parent!.val) {
                parent!.left = null;
                return {node: null, isDeleted: true};
            } else {
                parent!.right = null;
                return {node: null, isDeleted: true};
            }
        }
    }

    public maximum(): T | null {
        if(this.size == 0) return null;
        return this.maximumNode(this.root!);
    }

    private maximumNode(node: BSNode<T>): T | null {
        if(node == null) return null;
        if(node.right == null) {
            return node.val;
        } else {
            return this.maximumNode(node.right);
        }
    }

    public minimum(): T | null {
        if(this.size == 0) return null;
        return this.minimumNode(this.root!);
    }

    private minimumNode(node: BSNode<T>): T | null {
        if(node == null) return null;
        if(node.left == null) {
            return node.val;
        } else {
            return this.minimumNode(node.left);
        }
    }

    public BFT(): T[] {
        let list: T[] =[];
        if(this.size == 0) return list;

        let queue = new Queue<BSNode<T>>()
        queue.enqueue(this.root!);
        
        while (queue.getSize() > 0) {
            let current = queue.dequeue() as BSNode<T>;
            list.push(current.val);

            let leftChild = current.left
            if(leftChild != null) {
                queue.enqueue(leftChild);
            }

            let rightChild = current.right
            if(rightChild != null) {
                queue.enqueue(rightChild);
            }
        }

        return list;
    }

    public BFS(val: T): BSNode<T> | null {
        if(this.size == 0) return null;
        let node: BSNode<T> | null = null;

        let queue = new Queue<BSNode<T>>()
        queue.enqueue(this.root!);

        while (queue.getSize() > 0) {
        let current = queue.dequeue() as BSNode<T>;        
            if(current.val == val) {
                node = current;
                break;
            }

            let leftChild = current.left
            if(leftChild != null) {
                queue.enqueue(leftChild);
            }

            let rightChild = current.right
            if(rightChild != null) {
                queue.enqueue(rightChild);
            }
        }

        return node;
    }


    public DFT(method: "preOrder" | "inOrder" | "postOrder"): T[] {
        let list: T[] = [];
        if(this.size == 0) return list;

        switch(method) {
            case "preOrder":
                this.preOrder(list, this.root);
                break;
            case "inOrder": 
                this.inOrder(list, this.root);
                break;
            case "postOrder": 
                this.postOrder(list, this.root);
                break
            default:
                this.inOrder(list, this.root);
        }

        return list;
    }

    // public DFT(): BSNode<T> | null {}

    private preOrder(list: T[], node: BSNode<T> | null) {
        if (node == null) return;

        list.push(node.val);
        this.preOrder(list, node.left);
        this.preOrder(list, node.right);
        return
    }

    private inOrder(list: T[], node: BSNode<T> | null) {
        if (node == null) return;

        this.inOrder(list, node.left);
        list.push(node.val);
        this.inOrder(list, node.right);
        return
    }

    private postOrder(list: T[], node: BSNode<T> | null) {
        if (node == null) return;

        this.postOrder(list, node.left);
        this.postOrder(list, node.right);
        list.push(node.val);
        return
    }

}