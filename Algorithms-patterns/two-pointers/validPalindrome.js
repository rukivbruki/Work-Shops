/*
  Function to check if a string is a palindrome.

  @param {string} s - The input string to be checked.
  @returns {boolean} - True if the string is a palindrome, false otherwise.

  Constraints:
  - 1 ≤ s.length ≤ 2 × 10^5
  - The string won't have any spaces and will only consist of ASCII characters.

  Note: A phrase, word, or sequence is a palindrome if it reads the same forwards and backwards.
*/

export const isPalindrome = str => {
    if (str.length <= 2) {
        return true
    }

    for (let i = 0; i <= Math.floor(str.length / 2); i++) {
        if (str[i].toLowerCase() !== str[str.length - 1 - i].toLowerCase()) {
            return false
        }
    }

    return true
}

// export function isPalindrome(s) {
//     let pointer2 = s.length - 1;

//     for (let i = 0; i < Math.floor(s.length / 2); i++) {
//         if (s[i] !== s[pointer2]) {
//             return false;
//         }
//         --pointer2;
//     }

//     return true;
// }

// function isPalindrome(s) {
//     let left = 0,
//         right = s.length - 1;

//     while (left < right) {
// 		if (s[left] != s[right]) {
// 			return false;
// 		}
// 		left++;
// 		right--;
//     }
//     return true;
// }

console.log(isPalindrome('"RACEACAR"'))
