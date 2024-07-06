import { DIRECTION, swap } from './utils';

// Time: { Worst= O(n^2) & Average=O(n log n) } || Space O(log n)
export function quickSort(
  list: number[],
  direction: DIRECTION,
  start?: number,
  end?: number,
): number[] {
  start = start ?? 0;
  end = end ?? list.length - 1;
  if (start < end) {
    let partitionIndex = partition(list, direction, start, end);
    quickSort(list, direction, start, partitionIndex - 1);
    quickSort(list, direction, partitionIndex + 1, end);
  }

  return list;
}

// Function to partition the array and return the partition index
function partition(
  list: number[],
  direction: DIRECTION,
  start: number,
  end: number,
): number {
  let pivot = list[end];
  let storeIndex = start - 1;

  if (direction == DIRECTION.ASC) {
    for (let i = start; i <= end - 1; i++) {
      if (list[i] < pivot) {
        storeIndex++;
        swap(list, storeIndex, i);
      }
    }
  } else if (direction == DIRECTION.DESC) {
    for (let i = start; i <= end - 1; i++) {
      if (list[i] > pivot) {
        storeIndex++;
        swap(list, storeIndex, i);
      }
    }
  }

  swap(list, storeIndex + 1, end);
  return storeIndex + 1;
}
