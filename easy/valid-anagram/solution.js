/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// function isAnagram(s, t) {
//     // brute force solution: sort the two strings and compare
//     let sortedS = s.split('').sort().join('');
//     let sortedT = t.split('').sort().join('');
//     return sortedS === sortedT;
// }

function isAnagram(s, t) {
    // if s and t aren't the same length or don't exist, we can return false
    if (s.length !== t.length) return false;

    let counter = {};

    for (let i = 0; i < s.length; i++) {
      // increment count for chars in s
      counter[s[i]] = (counter[s[i]] || 0) + 1;
      // decrement count for chars in t
      counter[t[i]] = (counter[t[i]] || 0) - 1;
    }

    // loop over counter and check that it evens out (same chars in s as t)
    for (let key in counter) {
      if (counter[key] !== 0) return false;
    }

    return true;
}



module.exports = isAnagram;
