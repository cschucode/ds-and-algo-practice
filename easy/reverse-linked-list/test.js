const assert = require('assert');
const { reverseList, ListNode } = require('./solution');

// Helper function to create linked list from array
function createList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to convert linked list to array
function listToArray(head) {
    const result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

console.log('Running Reverse Linked List tests...\n');

// Test 1
try {
    const list1 = createList([1, 2, 3, 4, 5]);
    const reversed1 = reverseList(list1);
    assert.deepStrictEqual(listToArray(reversed1), [5, 4, 3, 2, 1]);
    console.log('✓ Test 1 passed: [1,2,3,4,5] → [5,4,3,2,1]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const list2 = createList([1, 2]);
    const reversed2 = reverseList(list2);
    assert.deepStrictEqual(listToArray(reversed2), [2, 1]);
    console.log('✓ Test 2 passed: [1,2] → [2,1]');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const list3 = createList([]);
    const reversed3 = reverseList(list3);
    assert.deepStrictEqual(listToArray(reversed3), []);
    console.log('✓ Test 3 passed: [] → []');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const list4 = createList([1]);
    const reversed4 = reverseList(list4);
    assert.deepStrictEqual(listToArray(reversed4), [1]);
    console.log('✓ Test 4 passed: single node');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

console.log('\nTests complete!');
