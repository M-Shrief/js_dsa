/**
 * String Rotation: Assume you have a method isSubString,
 * which checks if one word is a substring of another. Given two strings, s1 and s2,
 * write code to check if s2 is a rotation of s1 using only one call to isSubString
 * (e.g., "waterbottle" is a rotation of "erbottlewat").
 */


function is_rotation(s1: string, s2: string): boolean {
    if(s1.length != s2.length) return false;

    // Make a new string that concatenate s1 with itself.
    let s1s1 = s1+s1;
    return isSubString(s1s1, s2)
}


function isSubString(s1: string, s2: string): boolean {
    // First Letter in the second string
    let fls2 = s2[0];
    // the index of fls2 in the first string
    let fls2Index = s1.indexOf(fls2);
    // If the first letter doesn't exist then return false
    if(fls2Index < 0) return false;
    // If the rest of characters can't cover s2, then return false
    let subStringToBeCompared = s1.substring(fls2Index)
    if(subStringToBeCompared.length < s2.length) return false;

    for(let i = 0; i < subStringToBeCompared.length; i++) {
        for(let j = subStringToBeCompared.length; j > 0; j--) {
            // if(isSubString == true) break;
            let str = subStringToBeCompared.substring(i, j)
            if(str.length != s2.length || str[0] != s2[0]) continue;
            if(str == s2) {
                return true
            }
        }
    }

    return false
}


if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe.concurrent('Testing 1.9 - string rotation', () => {
        test("Testing zero_matrix_v1", () => {
            expect(is_rotation("waterbottle", "bottlerwate")).toEqual(false)
            expect(is_rotation("waterbottle", "bottlewate")).toEqual(false)
            expect(is_rotation("waterbottle", "erbottlewat")).toEqual(true)
            expect(is_rotation("zoro", "oroz")).toEqual(true)
        })
    })
}