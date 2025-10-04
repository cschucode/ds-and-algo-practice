const assert = require('assert');
const threeSum = require('./solution');

// Helper to sort and compare arrays of arrays
function sortAndStringify(arr) {
    return arr.map(sub => sub.sort((a, b) => a - b)).sort().map(sub => JSON.stringify(sub));
}

console.log('Running 3Sum tests...\n');

// Test 1
try {
    const result1 = threeSum([-1, 0, 1, 2, -1, -4]);
    const expected1 = [[-1, -1, 2], [-1, 0, 1]];
    assert.deepStrictEqual(sortAndStringify(result1), sortAndStringify(expected1));
    console.log('✓ Test 1 passed: [-1,0,1,2,-1,-4]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = threeSum([0, 1, 1]);
    const expected2 = [];
    assert.deepStrictEqual(result2, expected2);
    console.log('✓ Test 2 passed: [0,1,1]');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = threeSum([0, 0, 0]);
    const expected3 = [[0, 0, 0]];
    assert.deepStrictEqual(sortAndStringify(result3), sortAndStringify(expected3));
    console.log('✓ Test 3 passed: [0,0,0]');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = threeSum([-2, 0, 1, 1, 2]);
    const expected4 = [[-2, 0, 2], [-2, 1, 1]];
    assert.deepStrictEqual(sortAndStringify(result4), sortAndStringify(expected4));
    console.log('✓ Test 4 passed: multiple valid triplets');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

console.log('\nTests complete!');
