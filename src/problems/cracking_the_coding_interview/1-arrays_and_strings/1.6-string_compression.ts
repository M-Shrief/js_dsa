/**
 * String Compression: Implement a method to perform basic string compression using
 * the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3.
 * If the "compressed" string would not become smaller than the original string,
 * your method should return the original string.
 * You can assume the string has only uppercase and lowercase letters (a - z)
 */

// Time: O(n), Space = O(n)
function compress_string_v1(str: string): string {
    let compressedStr = "";
    let currentLetter = str[0];
    let currentLetterCount = 0;
    for(let l of str) {
        if (l != currentLetter) {
            compressedStr += `${currentLetter}${currentLetterCount}`;
            currentLetter = l;
            currentLetterCount = 1;
        } else {
            currentLetterCount++
        } 
    }
    // Adding last iteration
    compressedStr += `${currentLetter}${currentLetterCount}`;

    return compressedStr.length < str.length ? compressedStr : str;
}

if(import.meta.vitest) {
    const { describe, test, expect } = import.meta.vitest
    describe.concurrent('Testing 1.6 - compress_string', () => {
        test("Testing compress_string_v1", () => {
            expect(compress_string_v1("aabcccccaaa")).toEqual("a2b1c5a3");
            expect(compress_string_v1("bbbbccdddd")).toEqual("b4c2d4");
            expect(compress_string_v1("aaaaaaaaaa")).toEqual("a10");
        })
    })
}
