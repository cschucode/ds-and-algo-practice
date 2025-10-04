const assert = require('assert');
const twoSum = require('./solution');

console.log('Running Two Sum tests...\n');

// Test 1
try {
    const result1 = twoSum([2, 7, 11, 15], 9);
    assert.deepStrictEqual(result1.sort(), [0, 1]);
    console.log('✓ Test 1 passed: [2,7,11,15], target 9');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = twoSum([3, 2, 4], 6);
    assert.deepStrictEqual(result2.sort(), [1, 2]);
    console.log('✓ Test 2 passed: [3,2,4], target 6');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = twoSum([3, 3], 6);
    assert.deepStrictEqual(result3.sort(), [0, 1]);
    console.log('✓ Test 3 passed: [3,3], target 6');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = twoSum([-1, -2, -3, -4, -5], -8);
    assert.deepStrictEqual(result4.sort(), [2, 4]);
    console.log('✓ Test 4 passed: negative numbers');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = twoSum([0, 4, 3, 0], 0);
    assert.deepStrictEqual(result5.sort(), [0, 3]);
    console.log('✓ Test 5 passed: zeros');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

console.log('\nTests complete!');
