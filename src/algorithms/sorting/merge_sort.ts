import { DIRECTION } from './utils'

// Time Big O: O(n log n) || Space Big O: O(n)  
export function mergeSort(list: number[], direction: DIRECTION):number[] {
    if (list.length <= 1) return list;

    let half = Math.floor(list.length / 2);
    let firstHalf = mergeSort(list.slice(0, half), direction);
    let secHalf = mergeSort(list.slice(half), direction);

    return merge(firstHalf, secHalf, direction);
}

function merge(leftList: number[], rightList: number[], direction: DIRECTION): number[] {
    let final: number[] = [], i = 0, j = 0;


    while (i < leftList.length && j < rightList.length) {
        if (direction == DIRECTION.ASC && leftList[i] < rightList[j]) {
            final.push(leftList[i]);
            i++
        } else if (direction == DIRECTION.DESC && leftList[i] > rightList[j]) {
            final.push(leftList[i]);
            i++
        } else {
            final.push(rightList[j])
            j++
        }
    }

    final = final.concat(leftList.slice(i), rightList.slice(j))

    return final
}