/**
 * Palindrome Permutation: 
 * Given a string, write a function to check if it is a permutation of a palindrome.
 * A palindrome is a word or phrase that is the same forwards and backwards.
 * A permutation is a rearrangement of letters.
 * The palindrome does not need to be limited to just dictionary words.
 * 
 * Note: non-letter (like whitespaces) doesn't count, and it's not case sensitive of course.
 * 
 * EXAMPLE
 * Input: Tact Coa
 * Output: True (permutations: "taco cat'; "atco eta·; etc.) 
 */

//  Version 1
// Time: O(n) - Space: O(1) 
function isPalindromePermutation_v1(str: string): boolean {
    let size = str.length
    let mpChar = new Map<string, number>()

    for(let l of str) {
        l = l.toLowerCase()
        if(l == " ") {
            size--
            continue
        }
        let letterCount = mpChar.get(l)
        if(!letterCount) {
            mpChar.set(l, 1)
        } else {
            mpChar.set(l, letterCount + 1)
        }
    }        

    let isEven = size % 2 === 0 ? true : false;
    let oddCount = 0;
    for(let val of mpChar.values()) {
        if(isEven) {
            if(val % 2 != 0) return false
        } else {
            if(val % 2 != 0) {
                oddCount++
            }
            if(oddCount > 1) {
                return false;
            }
        }
    }

    return true
}


if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe('Testing 1.4 - isPalindromePermutation', () => {
        test("Testing isPalindromePermutation_v1", () => {
            expect(isPalindromePermutation_v1("TactzCoa")).toEqual(false);
            expect(isPalindromePermutation_v1("alllax")).toEqual(false);
            expect(isPalindromePermutation_v1("allla")).toEqual(true);
            expect(isPalindromePermutation_v1("TactCoa")).toEqual(true);
            expect(isPalindromePermutation_v1("Tact Coa")).toEqual(true);
        })
    })
}