const assert = require('assert');
const maxSubArray = require('./solution');

console.log('Running Maximum Subarray tests...\n');

// Test 1
try {
    const result1 = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    assert.strictEqual(result1, 6);
    console.log('✓ Test 1 passed: [-2,1,-3,4,-1,2,1,-5,4] → 6');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = maxSubArray([1]);
    assert.strictEqual(result2, 1);
    console.log('✓ Test 2 passed: [1] → 1');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = maxSubArray([5, 4, -1, 7, 8]);
    assert.strictEqual(result3, 23);
    console.log('✓ Test 3 passed: [5,4,-1,7,8] → 23');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = maxSubArray([-1]);
    assert.strictEqual(result4, -1);
    console.log('✓ Test 4 passed: all negative numbers');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = maxSubArray([-2, -1]);
    assert.strictEqual(result5, -1);
    console.log('✓ Test 5 passed: multiple negative numbers');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

console.log('\nTests complete!');
