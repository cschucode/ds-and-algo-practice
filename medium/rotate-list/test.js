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

describe('rotateRight', () => {
    test('Example 1: [1,2,3,4,5], k = 2 -> [4,5,1,2,3]', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = rotateRight(head, 2);
        expect(listToArray(result)).toEqual([4, 5, 1, 2, 3]);
    });

    test('Example 2: [0,1,2], k = 4 -> [2,0,1]', () => {
        const head = arrayToList([0, 1, 2]);
        const result = rotateRight(head, 4);
        expect(listToArray(result)).toEqual([2, 0, 1]);
    });

    test('Empty list', () => {
        const head = arrayToList([]);
        const result = rotateRight(head, 1);
        expect(listToArray(result)).toEqual([]);
    });

    test('Single node', () => {
        const head = arrayToList([1]);
        const result = rotateRight(head, 1);
        expect(listToArray(result)).toEqual([1]);
    });

    test('k = 0', () => {
        const head = arrayToList([1, 2, 3]);
        const result = rotateRight(head, 0);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    test('k equals list length', () => {
        const head = arrayToList([1, 2, 3]);
        const result = rotateRight(head, 3);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    test('k greater than list length', () => {
        const head = arrayToList([1, 2]);
        const result = rotateRight(head, 5);
        expect(listToArray(result)).toEqual([2, 1]);
    });

    test('Large k value', () => {
        const head = arrayToList([1, 2, 3, 4, 5]);
        const result = rotateRight(head, 7);
        expect(listToArray(result)).toEqual([4, 5, 1, 2, 3]);
    });
});
