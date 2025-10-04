const assert = require('assert');
const isValid = require('./solution');

console.log('Running Valid Parentheses tests...\n');

// Test 1
try {
    const result1 = isValid("()");
    assert.strictEqual(result1, true);
    console.log('✓ Test 1 passed: "()"');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const result2 = isValid("()[]{}");
    assert.strictEqual(result2, true);
    console.log('✓ Test 2 passed: "()[]{}"');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const result3 = isValid("(]");
    assert.strictEqual(result3, false);
    console.log('✓ Test 3 passed: "(]"');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const result4 = isValid("([)]");
    assert.strictEqual(result4, false);
    console.log('✓ Test 4 passed: "([)]"');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const result5 = isValid("{[]}");
    assert.strictEqual(result5, true);
    console.log('✓ Test 5 passed: "{[]}"');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

// Test 6
try {
    const result6 = isValid("(");
    assert.strictEqual(result6, false);
    console.log('✓ Test 6 passed: unclosed bracket');
} catch (error) {
    console.log('✗ Test 6 failed:', error.message);
}

// Test 7
try {
    const result7 = isValid(")");
    assert.strictEqual(result7, false);
    console.log('✓ Test 7 passed: closing bracket without opening');
} catch (error) {
    console.log('✗ Test 7 failed:', error.message);
}

console.log('\nTests complete!');
