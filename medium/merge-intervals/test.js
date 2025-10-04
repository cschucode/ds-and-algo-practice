const assert = require('assert');
const merge = require('./solution');

console.log('Running Merge Intervals tests...\n');

// Test 1
try {
    const result1 = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
    assert.deepStrictEqual(result1, [[1, 6], [8, 10], [15, 18]]);
    console.log('✓ Test 1 passed: [[1,3],[2,6],[8,10],[15,18]]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = merge([[1, 4], [4, 5]]);
    assert.deepStrictEqual(result2, [[1, 5]]);
    console.log('✓ Test 2 passed: [[1,4],[4,5]]');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = merge([[1, 4], [0, 4]]);
    assert.deepStrictEqual(result3, [[0, 4]]);
    console.log('✓ Test 3 passed: [[1,4],[0,4]]');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = merge([[1, 4], [2, 3]]);
    assert.deepStrictEqual(result4, [[1, 4]]);
    console.log('✓ Test 4 passed: completely overlapping intervals');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = merge([[1, 4]]);
    assert.deepStrictEqual(result5, [[1, 4]]);
    console.log('✓ Test 5 passed: single interval');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

console.log('\nTests complete!');
