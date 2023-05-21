/*
Write a function that takes a string as input and checks whether it can be a valid palindrome by removing at most one character from it.

Constraints:
- The length of the string is between 1 and 10^5.
- The string only consists of English letters.
*/

export function isPalindrome(s) {
  let left = 0,
    right = s.length - 1;

  let leftExtraLetter = 0;
  let rightExtraLetter = 0;

  while (left <= right) {
    if (rightExtraLetter > 1 || leftExtraLetter > 1) return false;

    if (s[left] !== s[right]) {
      if (leftExtraLetter > 0) {
        left--;
        right--;
        rightExtraLetter++;
      } else if (rightExtraLetter > 0) {
        right++;
        left++;
        leftExtraLetter++;
      } else {
        right--;
        rightExtraLetter++;
      }
    } else {
      left++;
      right--;
    }
  }

  return true;
}

console.log(isPalindrome('dead'));
