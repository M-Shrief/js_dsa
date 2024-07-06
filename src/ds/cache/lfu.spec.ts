import { describe, test, expect } from 'vitest';
import { LFU } from './lfu';

describe.concurrent('Testing LFU', async () => {
  test('Testing PUT()', async () => {
    let lfu = new LFU<number>(3);

    lfu.put('one', 1);
    lfu.put('two', 2);
    lfu.put('three', 3);

    expect(lfu.get('one')).toEqual(1);
    expect(lfu.get('two')).toEqual(2);

    // Should be 3, as it have the least freq
    expect(lfu.getTop()).toEqual(3);

    lfu.put('four', 4);
    expect(lfu.get('four')).toEqual(4);

    // Should've evicted "three"
    expect(lfu.get('three')).toEqual(null);

    lfu.get('one');
    lfu.get('one');
    lfu.get('two');
    lfu.get('four');
    lfu.get('four');
    // Freqs -> one.freq = 3, two.freq = 2, four.freq = 3;

    lfu.put('five', 5);
    expect(lfu.get('five')).toEqual(5);

    expect(lfu.get('two')).toEqual(null);
  });

  test('Testing GET()', async () => {
    let lfu = new LFU<number>(3);

    lfu.put('one', 1);
    lfu.put('two', 2);
    lfu.put('three', 3);

    expect(lfu.get('one')).toEqual(1);
    expect(lfu.get('two')).toEqual(2);

    // Should be 3, as it have the least freq
    expect(lfu.getTop()).toEqual(3);

    lfu.put('four', 4);
    expect(lfu.get('four')).toEqual(4);

    // non-existing key
    expect(lfu.get('three')).toEqual(null);

    lfu.get('one');
    lfu.get('one');
    lfu.get('two');
    lfu.get('four');
    lfu.get('four');
    // Freqs -> one.freq = 3, two.freq = 2, four.freq = 3;

    lfu.put('five', 5);

    // higher freq should stay in the cache
    expect(lfu.get('one')).not.toEqual(null);
    expect(lfu.get('four')).not.toEqual(null);
  });
});
