import { describe, test, expect} from 'vitest';
import {Queue} from './queue'
describe.concurrent("Testing Queue", async() => {
    test("Testing Enqueue()", async() => {
        let q = new Queue<number>()
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);

        expect(q.getFirst()).toEqual(1);
        q.dequeue()
        expect(q.getFirst()).toEqual(2);
    })

    test("Testing Dequeue()", async() => {
        let q = new Queue<number>()
        q.enqueue(1);
        q.enqueue(2);
        q.enqueue(3);

        expect(q.dequeue()).toEqual(1);
        expect(q.dequeue()).toEqual(2);
    })
})