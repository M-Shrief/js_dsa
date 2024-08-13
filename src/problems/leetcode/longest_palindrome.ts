/** Problem *******
 *
 * Longest Palindromic Substring: https://leetcode.com/problems/longest-palindromic-substring/description/
 * Given a string s, return the longest  palindromic substring in s.
 * Example 1:
    Input: s = "babad"
    Output: "bab", "aba" is also a valid answer.
 * Example 2:
    Input: s = "cbbd"
    Output: "bb"

 * Constraints:
    1 <= s.length <= 1000
    s consist of only digits and English letters. 
*/


/** Solution
 * Credit: https://leetcode.com/u/anshuP_cs24/
 * Intutuin: The given code is an implementation of the "Expand Around Center" approach
 *      for finding the longest palindromic substring in a given string.
 *      This approach works by iterating through each character in the string and expanding around
 *      it to check for palindromes. It takes advantage of the fact that a palindrome can be centered
 *      around a single character (in the case of odd-length palindromes)
 *      or between two characters (in the case of even-length palindromes).
 *      By expanding from each character, it identifies the longest palindrome.
 * 
 * Complexity
    Time complexity:
    The time complexity of this code is O(n^2), where 'n' is the length of the input string 's'. This is because, in the worst case, for each of the 'n' characters in 's', we may expand to both the left and the right, resulting in a quadratic time complexity.

    Space complexity:
    The space complexity of this code is O(1) because it doesn't use any additional data structures that grow with the input size. The space is primarily used for the variables and temporary substrings, which don't depend on the input size.
*
* Stats: beats 90% of other solutions.
*/ 

function longestPalindrome(s: string): string {
    function expandAroundCenter(left: number, right: number): string {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }

    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let odd = expandAroundCenter(i, i);
        let even = expandAroundCenter(i, i + 1);

        if (odd.length > longest.length) {
            longest = odd;
        }

        if (even.length > longest.length) {
            longest = even;
        }
    }

    return longest;
};

