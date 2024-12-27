import { describe, test, expect } from 'vitest';
import { MFU } from './mfu';

describe.concurrent('Testing MFU', async () => {
  test('Testing PUT()', async () => {
    let mfu = new MFU<number>(3);

    mfu.put('one', 1);
    mfu.put('two', 2);
    mfu.put('three', 3);

    expect(mfu.get('one')).toEqual(1);
    expect(mfu.get('two')).toEqual(2);
    
    mfu.get("one")
    mfu.get("two")
    mfu.get("two")
    mfu.get("three")
    // Score: one.freq= 2, two.freq= 3, three.freq=1

    expect(mfu.getTop()).toEqual(2)

    mfu.put("four", 4)
    expect(mfu.get('four')).toEqual(4)
    expect(mfu.get("two")).toEqual(null)

    mfu.get('one')
    mfu.get('one')
    mfu.get('three')
    mfu.get('four')
    mfu.get('four')
    // Freqs -> one.freq = 4, three.freq = 2, four.freq = 3;

    mfu.put("five", 5)
    expect(mfu.get("five")).toEqual(5)
    expect(mfu.get("one")).toEqual(null)
  })

  test('Testing GET()', async () => {
    let mfu = new MFU<number>(3);

    mfu.put('one', 1);
    mfu.put('two', 2);
    mfu.put('three', 3);

    expect(mfu.get('one')).toEqual(1);
    expect(mfu.get('two')).toEqual(2);
    
    mfu.get("one")
    mfu.get("two")
    mfu.get("two")
    mfu.get("three")
    // Score: one.freq= 2, two.freq= 3, three.freq=1

    expect(mfu.getTop()).toEqual(2)

    mfu.put("four", 4)
    expect(mfu.get('four')).toEqual(4)
    expect(mfu.get("two")).toEqual(null)

    mfu.get('one')
    mfu.get('one')
    mfu.get('three')
    mfu.get('four')
    mfu.get('four')
    // Freqs -> one.freq = 4, three.freq = 2, four.freq = 3;

    expect(mfu.getTop()).toEqual(1)
  });
})