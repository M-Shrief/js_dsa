/**
 * Is Unique: Implement an algorithm to determine if a string has all unique characters.
 * What if you cannot use additional data structures? 
 * 
*/

// version 1 with Data structures.
// Time: O(n), Space: O(n)
function isUnique_v1(str: string): boolean {
    let charMap = new Map<string, boolean>()
    for(let l of str) {
        if(charMap.get(l)) return false;
        charMap.set(l, true);
    }
    return true
}

// version 1 without Data structures.
// Time: O(n^2), Space: O(1)
function isUnique_v2(str: string): boolean {
    for(let i = 0; i < str.length; i++) {
        for(let j = 0; j < str.length; j++) {
            if(i == j) continue
            if(str[i] === str[j]) return false;
        }
    }
    return true
}

// Version 3, without data structures.
// Time: O(n), Space: O(n)
function isUnique_v3(str: string): boolean {
    let arr = [...str];
    arr.sort();
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == arr[i+1]) return false
    }
    return true
}


if(import.meta.vitest) {
    const { describe, test, expect, afterEach } = import.meta.vitest
    describe.concurrent('Testing 1.1 - isUnique', () => {
        test("Testing isUnique_v1", () => {
            expect(isUnique_v1("fagxvjf")).toEqual(false);
            expect(isUnique_v1("sagfjklmbcx")).toEqual(true);
        })
        test("Testing isUnique_v2", () => {
            expect(isUnique_v2("fagxvjf")).toEqual(false);
            expect(isUnique_v2("sagfjklmbcx")).toEqual(true);
        })
        test("Testing isUnique_v3", () => {
            expect(isUnique_v3("fagxvjf")).toEqual(false);
            expect(isUnique_v3("sagfjklmbcx")).toEqual(true);
        })
    })
}