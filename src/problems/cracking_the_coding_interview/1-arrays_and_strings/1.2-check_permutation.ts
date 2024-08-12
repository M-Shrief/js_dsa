/**
 * Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. 
 * 
 * you should clarify:
 *  - the meaning of 'Permutation' ==> like "god" and "dog".
 *  - is it case sensitive?
 *  - the importance of whitespace?
 * 
 * Here we'll assume that it's case sensitive and whitespaces matters
*/

// Version 1
// Time: O(n) - Space: O(n)
function checkPermutation_v1(str1: string, str2: string): boolean {
    // if it's a permutation, then it have the same letters in different order.
    if(str1.length != str2.length) return false

    let sortedStr1 = [...str1].sort().join('')
    let sortedStr2 = [...str2].sort().join('')
    if(sortedStr1 != sortedStr2) return false

    return true
}

// If it's not case sensitive ==> we'll convert every letter to lowercase and do the same algorithm.
// If whitespaces doesn't matter ==> we'll remove them by triming and searching for them in the middle of the string. Then we use the function above.


if(import.meta.vitest) {
    const { describe, test, expect, afterEach } = import.meta.vitest
    describe.concurrent('Testing 1.2 - checkPermutation', () => {
        test("Testing checkPermutation_v1", () => {
            expect(checkPermutation_v1("dally", "ally")).toEqual(false);
            expect(checkPermutation_v1("dall", "ally")).toEqual(false);
            expect(checkPermutation_v1("Dog", "God")).toEqual(false);
            expect(checkPermutation_v1("dog", "god")).toEqual(true);
            expect(checkPermutation_v1("ally", "yall")).toEqual(true);
        })
    })
}