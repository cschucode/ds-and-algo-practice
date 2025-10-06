/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const stack = [];
  const bracketMap = { ')': '(', '}': '{', ']': '[' };

  for (let i = 0; i < s.length; i++) {
    const bracket = s[i];

    // push opening brackets on stack
    if (!bracketMap[bracket]) {
      stack.push(bracket);
    } else {
      const top = stack[stack.length - 1];

      // if bracket closes top of stack bracket, remove top
      if (bracketMap[bracket] === top) {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  // valid parentheses will have no brackets left and should return true. Otherwise, return false
  return stack.length === 0;
}

module.exports = isValid;
