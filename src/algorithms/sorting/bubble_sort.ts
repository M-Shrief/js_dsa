import { DIRECTION, swap } from "./utils";

// Time Big O: O(n^2) || Space Big O: O(1)  
export function bubbleSort(list: number[], direction: DIRECTION): number[] {
    for(let i = 0; i < list.length; i++) {
        for(let j = 0; j < list.length - 1; j++) {
            if (direction == DIRECTION.ASC) {
                if (list[i] < list[j]) {
                    swap(list, i, j);
                }
            } else {
                if (list[i] > list[j]) {
                    swap(list, i, j);
                }
            }
        }
    }
    return list;
}