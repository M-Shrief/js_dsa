import {describe, test, expect} from 'vitest'
import {Heap} from './heap'

describe.concurrent("Testing Heap", async() => {
    describe("MinHeap", async() => {
        let isSmaller = (a: number, b: number): boolean =>  a < b;
        test("Testing Push", async () => {
            let h = new Heap<number>(isSmaller);
    
            h.push(1);
            h.push(6);
            h.push(4);    
            expect(h.getTop()).toEqual(1)    

            h.push(-3);
            h.push(-1);
            h.push(-5);
            expect(h.getTop()).toEqual(-5)    
        })

        test("Testing Pop", async() => {
            let h = new Heap<number>(isSmaller);
    
            h.push(1);
            h.push(6);
            h.push(4);    

            h.pop()
            expect(h.getTop()).toEqual(4);
            h.pop()
            expect(h.getTop()).toEqual(6);

            h.push(-3);
            h.push(-1);
            h.push(-5);

            h.pop()
            expect(h.getTop()).toEqual(-3);
            h.pop()
            expect(h.getTop()).toEqual(-1);
        })
    })

    describe("MaxHeap", async() => {
        let isBigger = (a: number, b: number): boolean =>  a > b;
        test("Testing Push", async () => {

            let h = new Heap<number>(isBigger);
            h.push(1);
            h.push(6);
            h.push(4);
            expect(h.getTop()).toEqual(6)
            
            h.push(-100);
            h.push(100)
            expect(h.getTop()).toEqual(100)
        })


        test("Testing Pop", async() => {
            let h = new Heap<number>(isBigger);
    
            h.push(1);
            h.push(6);
            h.push(4);    

            h.pop()
            expect(h.getTop()).toEqual(4);
            h.pop()
            expect(h.getTop()).toEqual(1);

            h.push(-3);
            h.push(-1);
            h.push(-5);

            h.pop()
            expect(h.getTop()).toEqual(-1);
            h.pop()
            expect(h.getTop()).toEqual(-3);
        })
    })
})