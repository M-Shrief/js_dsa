import { DIRECTION, swap } from './utils';

// Time Big O: O(n^2) || Space Big O: O(1)
export function selectionSort(list: number[], directon: DIRECTION): number[] {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (directon == DIRECTION.ASC) {
        if (list[i] > list[j]) {
          swap(list, i, j);
        }
      } else {
        if (list[i] < list[j]) {
          swap(list, i, j);
        }
      }
    }
  }
  return list;
}
