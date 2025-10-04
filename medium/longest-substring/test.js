const assert = require('assert');
const lengthOfLongestSubstring = require('./solution');

console.log('Running Longest Substring Without Repeating Characters tests...\n');

// Test 1
try {
    const result1 = lengthOfLongestSubstring("abcabcbb");
    assert.strictEqual(result1, 3);
    console.log('✓ Test 1 passed: "abcabcbb" → 3');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = lengthOfLongestSubstring("bbbbb");
    assert.strictEqual(result2, 1);
    console.log('✓ Test 2 passed: "bbbbb" → 1');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = lengthOfLongestSubstring("pwwkew");
    assert.strictEqual(result3, 3);
    console.log('✓ Test 3 passed: "pwwkew" → 3');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = lengthOfLongestSubstring("");
    assert.strictEqual(result4, 0);
    console.log('✓ Test 4 passed: empty string');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = lengthOfLongestSubstring("au");
    assert.strictEqual(result5, 2);
    console.log('✓ Test 5 passed: "au" → 2');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

// Test 6
try {
    const result6 = lengthOfLongestSubstring("dvdf");
    assert.strictEqual(result6, 3);
    console.log('✓ Test 6 passed: "dvdf" → 3');
} catch (error) {
    console.log('✗ Test 6 failed:', error.message);
}

console.log('\nTests complete!');
