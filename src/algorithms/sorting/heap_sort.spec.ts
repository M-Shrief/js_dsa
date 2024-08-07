import { describe, expect, test } from 'vitest';
import { heapSort } from './heap_sort';
import { DIRECTION } from './utils';

describe.concurrent('Testing Insertion Sort()', async () => {
  test('Testing Ascending Sort', async () => {
    const arr: number[] = [101, 3, 5, 6, 99, 44, 14, 100, -2, -7];
    const want: number[] = [-7, -2, 3, 5, 6, 14, 44, 99, 100, 101];
    const got = heapSort(arr, DIRECTION.ASC);

    expect(got).toEqual(want);
  });

  test('Testing Descending Sort', async () => {
    const arr: number[] = [101, 3, 5, 6, 99, 44, 14, 100, -2, -7];
    const want: number[] = [101, 100, 99, 44, 14, 6, 5, 3, -2, -7];
    const got = heapSort(arr, DIRECTION.DESC);

    expect(got).toEqual(want);
  });
});
