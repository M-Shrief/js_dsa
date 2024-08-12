/**
 * URLify: Write a method to replace all spaces in a string with '%20'.
 * You may assume that the string has sufficient space at the end to hold the additional characters,
 * and that you are given the "true" length of the string.
 * EXAMPLE
 * Input: "Mr John Smith ", 13
 * Output: "Mr%20John%20Smith" 
*/ 

// Version 1 - with array methods
// Time: O(n) - Space: O(1) 
function URLify_v1(str: string, size: number): string {
    // We can just use string methods: trim() & replaceAll()
    return str.trim().replaceAll(" ", "%20")
}

// Version 2 - without array methods
// Time: O(n) - Space: O(1) 
function URLify_v2(str: string, size: number): string {
    str = str.trim()

    let mp = new Map<number, string>()
    for(let i = 0; i < str.length; i++) {
        if(str[i] == " ") {
            mp.set(i, "%20");
        } else {
            mp.set(i, str[i])
        }
    }
    
    let newString = "";
    for(let val of mp.values()) {
        newString += val
    }

    return newString
}

if(import.meta.vitest) {
    const { describe, test, expect, afterEach } = import.meta.vitest
    describe.concurrent('Testing 1.3 - URLify', () => {
        test("Testing URLify_v1", () => {
            expect(URLify_v1("Mr John Smith ", 13)).toEqual("Mr%20John%20Smith");
        })
        test("Testing URLify_v2", () => {
            expect(URLify_v2("Mr John Smith ", 13)).toEqual("Mr%20John%20Smith");
        })
    })
}