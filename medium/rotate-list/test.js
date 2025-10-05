const assert = require('assert');
const rotateRight = require('./solution');

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

function arrayToList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    let current = head;
    while (current) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

console.log('Running Rotate List tests...\n');

// Test 1
try {
    const head1 = arrayToList([1, 2, 3, 4, 5]);
    const result1 = rotateRight(head1, 2);
    assert.deepStrictEqual(listToArray(result1), [4, 5, 1, 2, 3]);
    console.log('✓ Test 1 passed: [1,2,3,4,5], k = 2');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const head2 = arrayToList([0, 1, 2]);
    const result2 = rotateRight(head2, 4);
    assert.deepStrictEqual(listToArray(result2), [2, 0, 1]);
    console.log('✓ Test 2 passed: [0,1,2], k = 4');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const head3 = arrayToList([]);
    const result3 = rotateRight(head3, 1);
    assert.deepStrictEqual(listToArray(result3), []);
    console.log('✓ Test 3 passed: empty list');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const head4 = arrayToList([1]);
    const result4 = rotateRight(head4, 1);
    assert.deepStrictEqual(listToArray(result4), [1]);
    console.log('✓ Test 4 passed: single node');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

// Test 5
try {
    const head5 = arrayToList([1, 2, 3]);
    const result5 = rotateRight(head5, 0);
    assert.deepStrictEqual(listToArray(result5), [1, 2, 3]);
    console.log('✓ Test 5 passed: k = 0');
} catch (error) {
    console.log('✗ Test 5 failed:', error.message);
}

// Test 6
try {
    const head6 = arrayToList([1, 2, 3]);
    const result6 = rotateRight(head6, 3);
    assert.deepStrictEqual(listToArray(result6), [1, 2, 3]);
    console.log('✓ Test 6 passed: k equals list length');
} catch (error) {
    console.log('✗ Test 6 failed:', error.message);
}

// Test 7
try {
    const head7 = arrayToList([1, 2]);
    const result7 = rotateRight(head7, 5);
    assert.deepStrictEqual(listToArray(result7), [2, 1]);
    console.log('✓ Test 7 passed: k greater than list length');
} catch (error) {
    console.log('✗ Test 7 failed:', error.message);
}

// Test 8
try {
    const head8 = arrayToList([1, 2, 3, 4, 5]);
    const result8 = rotateRight(head8, 7);
    assert.deepStrictEqual(listToArray(result8), [4, 5, 1, 2, 3]);
    console.log('✓ Test 8 passed: large k value');
} catch (error) {
    console.log('✗ Test 8 failed:', error.message);
}

console.log('\nTests complete!');
