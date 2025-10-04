const assert = require('assert');
const containsDuplicate = require('./solution');

console.log('Running Contains Duplicate tests...\n');

// Test 1
try {
    const result1 = containsDuplicate([1, 2, 3, 1]);
    assert.strictEqual(result1, true);
    console.log('✓ Test 1 passed: [1,2,3,1]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = containsDuplicate([1, 2, 3, 4]);
    assert.strictEqual(result2, false);
    console.log('✓ Test 2 passed: [1,2,3,4]');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
    assert.strictEqual(result3, true);
    console.log('✓ Test 3 passed: [1,1,1,3,3,4,3,2,4,2]');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = containsDuplicate([1]);
    assert.strictEqual(result4, false);
    console.log('✓ Test 4 passed: single element');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = containsDuplicate([0, 0]);
    assert.strictEqual(result5, true);
    console.log('✓ Test 5 passed: duplicate zeros');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

console.log('\nTests complete!');
