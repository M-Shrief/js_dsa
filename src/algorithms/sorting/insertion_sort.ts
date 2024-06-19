import { DIRECTION } from './utils'

export function insertionSort(arr: number[], direction: DIRECTION): number[] {
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        let j = i -1;

        if (direction == DIRECTION.ASC) {
            while(j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = key;
        } else {
            while(j >= 0 && arr[j] < key) {
                arr[j + 1] = arr[j]
                j--
            }
            arr[j + 1] = key;
        }
    }
    return arr
}