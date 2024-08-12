/**
 * One Away: There are three types of edits that can be performed on strings: insert a character,
 * remove a character, or replace a character.
 * Given two strings, write a function to check if they are one edit (or zero edits) away.
 * 
 * EXAMPLE:
 * pale, ple -> true
 * pales, pale -> true
 * pale, bale -> true
 * pale, bae -> false 
 */

// Time: O(n) - Space: O(n)
function oneAway_v1(str1: string, str2: string): boolean {
    let diffCount = 0;

    let lenghtDiff = Math.abs(str1.length - str2.length) 
    // If they've more than 1 difference in lenght, then it used more than 1 operation.
    if(lenghtDiff > 1) return false;
    // if they've the same lenght, then it can only be replace method,
    // we need to check if we've 1 replace operation or more. 
    if(lenghtDiff == 0) {
        for(let i = 0; i < str1.length; i++) {
            if(str1[i] != str2[i]) {
                diffCount++
            }

            if(diffCount > 1) {
                return false
            }
        }
    }

    if(lenghtDiff == 1) {
        let longerStr = str1.length > str2.length ? str1 : str2;
        let shorterStr = str1.length < str2.length ? str1 : str2;

        let index1 = 0, index2 = 0;
        while(index1 < longerStr.length && index2 < shorterStr.length) {
            if(longerStr[index1] != shorterStr[index2]) {
                if(index1 != index2) {
                    return false;
                }
                index1++;
            } else {
                index1++
                index2++
            }
        }
    }
    return true;
}

if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe.concurrent('Testing 1.5 - oneAway', () => {
        test("Testing oneAway_v1", () => {
            expect(oneAway_v1("pale", "bae")).toEqual(false);
            expect(oneAway_v1("pale", "ple")).toEqual(true);
            expect(oneAway_v1("pales", "pale")).toEqual(true);
            expect(oneAway_v1("pale", "bale")).toEqual(true);
            expect(oneAway_v1("pale", "plea")).toEqual(false);
        })
    })
}