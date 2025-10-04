const assert = require('assert');
const canFinish = require('./solution');

console.log('Running Course Schedule tests...\n');

// Test 1
try {
    const result1 = canFinish(2, [[1, 0]]);
    assert.strictEqual(result1, true);
    console.log('✓ Test 1 passed: 2 courses, [[1,0]]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = canFinish(2, [[1, 0], [0, 1]]);
    assert.strictEqual(result2, false);
    console.log('✓ Test 2 passed: circular dependency');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = canFinish(3, [[1, 0], [2, 1]]);
    assert.strictEqual(result3, true);
    console.log('✓ Test 3 passed: linear dependency chain');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = canFinish(4, [[1, 0], [2, 0], [3, 1], [3, 2]]);
    assert.strictEqual(result4, true);
    console.log('✓ Test 4 passed: multiple prerequisites');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = canFinish(3, [[0, 1], [1, 2], [2, 0]]);
    assert.strictEqual(result5, false);
    console.log('✓ Test 5 passed: cycle of 3 courses');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

// Test 6
try {
    const result6 = canFinish(1, []);
    assert.strictEqual(result6, true);
    console.log('✓ Test 6 passed: no prerequisites');
} catch (error) {
    console.log('✗ Test 6 failed:', error.message);
}

console.log('\nTests complete!');
