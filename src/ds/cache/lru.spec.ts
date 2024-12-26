import { describe, test, expect } from 'vitest';
import { LRU } from './lru';

describe.concurrent('Testing LRU', async () => {
  test('Testing Put()', async () => {
    let lru = new LRU<number>(3);

    lru.put('one', 1);
    lru.put('two', 2);
    lru.put('three', 3);

    expect(lru.getSize()).toEqual(3);
    expect(lru.get('one')).toEqual(1);
    expect(lru.get('two')).toEqual(2);
    expect(lru.get('three')).toEqual(3);

    lru.put('four', 4);
    expect(lru.getTop()).toEqual(4);
    expect(lru.get('one')).toEqual(null);

    lru.put('five', 5);
    expect(lru.getTop()).toEqual(5);
    expect(lru.get('two')).toEqual(null);
    lru.get("three")
    lru.get("one")
  });

  test('Testing Get()', async () => {
    let lru = new LRU<number>(3);

    lru.put('one', 1);
    lru.put('two', 2);
    lru.put('three', 3);

    expect(lru.get('one')).toEqual(1);
    expect(lru.getTop()).toEqual(1);
    expect(lru.get('two')).toEqual(2);
    expect(lru.getTop()).toEqual(2);
    expect(lru.get('three')).toEqual(3);
    expect(lru.getTop()).toEqual(3);

    lru.put('four', 4);
    expect(lru.get('four')).toEqual(4);
    expect(lru.getTop()).toEqual(4);
    expect(lru.get('one')).toEqual(null);

    lru.put('five', 5);
    expect(lru.get('five')).toEqual(5);
    expect(lru.getTop()).toEqual(5);
    expect(lru.get('two')).toEqual(null);
  });
});
