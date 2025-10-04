const assert = require('assert');
const longestPalindrome = require('./solution');

console.log('Running Longest Palindromic Substring tests...\n');

// Test 1
try {
    const result1 = longestPalindrome("babad");
    assert.ok(result1 === "bab" || result1 === "aba");
    console.log('✓ Test 1 passed: "babad"');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = longestPalindrome("cbbd");
    assert.strictEqual(result2, "bb");
    console.log('✓ Test 2 passed: "cbbd"');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = longestPalindrome("a");
    assert.strictEqual(result3, "a");
    console.log('✓ Test 3 passed: single character');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = longestPalindrome("racecar");
    assert.strictEqual(result4, "racecar");
    console.log('✓ Test 4 passed: entire string is palindrome');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = longestPalindrome("noon");
    assert.strictEqual(result5, "noon");
    console.log('✓ Test 5 passed: even-length palindrome');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

// Test 6
try {
    const result6 = longestPalindrome("abcdef");
    assert.ok(result6.length === 1);
    console.log('✓ Test 6 passed: no palindrome longer than 1');
} catch (error) {
    console.log('✗ Test 6 failed:', error.message);
}

console.log('\nTests complete!');
