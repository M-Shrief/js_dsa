import { DIRECTION, swap } from "./utils";

// Time Big O: O(n Log n) || Space Big O: O(1)  
export function heapSort(list: number[], direction: DIRECTION): number[] {


    for(let i = Math.floor(list.length / 2); i >= 0; i--) {
        heapify(list, list.length, i, direction);
    }
    
    for(let i = list.length -1; i >= 1; i--) {
        swap(list, 0, i);
        heapify(list, i, 0, direction);
    }

    return list;
}

function heapify(list: number[], listSize: number, index: number, direction: DIRECTION) {
    
    let parent = index;
    let leftLeafIndex = 2* index + 1
    let rightLeafIndex = 2* index + 2

    if (direction == DIRECTION.ASC) {
        if (leftLeafIndex < listSize && list[leftLeafIndex] > list[parent]) {
            parent = leftLeafIndex;
        }
        if(rightLeafIndex < listSize && list[rightLeafIndex] > list[parent]) {
            parent = rightLeafIndex;
        }
    } else {
        if (leftLeafIndex < listSize && list[leftLeafIndex] < list[parent]) {
            parent = leftLeafIndex
        }
        if (rightLeafIndex < listSize && list[rightLeafIndex] < list[parent]) {
            parent = rightLeafIndex
        } 
    }

    if(parent != index) {
        swap(list, parent, index);
        heapify(list, listSize, parent, direction)
    }
}