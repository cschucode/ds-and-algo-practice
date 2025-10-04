const assert = require('assert');
const isAnagram = require('./solution');

console.log('Running Valid Anagram tests...\n');

// Test 1
try {
    const result1 = isAnagram("anagram", "nagaram");
    assert.strictEqual(result1, true);
    console.log('✓ Test 1 passed: "anagram" and "nagaram"');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = isAnagram("rat", "car");
    assert.strictEqual(result2, false);
    console.log('✓ Test 2 passed: "rat" and "car"');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = isAnagram("listen", "silent");
    assert.strictEqual(result3, true);
    console.log('✓ Test 3 passed: "listen" and "silent"');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = isAnagram("a", "ab");
    assert.strictEqual(result4, false);
    console.log('✓ Test 4 passed: different lengths');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = isAnagram("aacc", "ccac");
    assert.strictEqual(result5, false);
    console.log('✓ Test 5 passed: same letters, different frequencies');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

console.log('\nTests complete!');
