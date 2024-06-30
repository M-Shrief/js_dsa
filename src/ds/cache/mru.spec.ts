import {describe, test, expect} from 'vitest'
import { MRU } from './mru'


describe.concurrent("Testing MRU", async() => {

    test("Testing Put()", async() => {
        let mru = new MRU<number>(3);

        mru.put("one", 1);
        mru.put("two", 2);
        mru.put("three", 3);

        expect(mru.getSize()).toEqual(3);
        expect(mru.get("one")).toEqual(1);
        expect(mru.get("two")).toEqual(2);
        expect(mru.get("three")).toEqual(3);

        mru.put("four", 4);
        expect(mru.get("three")).toEqual(null);
        expect(mru.get("four")).toEqual(4);

        mru.put("five", 5)
        expect(mru.get("four")).toEqual(null);
        expect(mru.get("five")).toEqual(5);
    })

    test("Testing Get()", async() => {
        let mru = new MRU<number>(3);

        mru.put("one", 1);
        mru.put("two", 2);
        mru.put("three", 3);

        expect(mru.get("three")).toEqual(3);
        expect(mru.getTop()).toEqual(2)
        expect(mru.get("two")).toEqual(2);
        expect(mru.getTop()).toEqual(1)
        expect(mru.get("one")).toEqual(1);
        expect(mru.getTop()).toEqual(3)

        mru.put("four", 4)
        expect(mru.getTop()).toEqual(4)
        expect(mru.get("one")).toEqual(null);

        mru.put("five", 5)
        expect(mru.getTop()).toEqual(5)
        expect(mru.get("two")).toEqual(null);
    })
})