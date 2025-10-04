# Valid Parentheses

## Difficulty: Easy

## Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets
2. Open brackets must be closed in the correct order
3. Every close bracket has a corresponding open bracket of the same type

## Examples

```javascript
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "{[]}"
Output: true
```

## Constraints

- 1 <= s.length <= 10^4
- s consists of parentheses only `'()[]{}'`

## Function Skeleton

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Your code here
}

module.exports = isValid;
```
