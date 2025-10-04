# Reverse Linked List

## Difficulty: Easy

## Description

Given the `head` of a singly linked list, reverse the list, and return the reversed list.

## Examples

```javascript
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Input: head = [1,2]
Output: [2,1]

Input: head = []
Output: []
```

## Constraints

- The number of nodes in the list is in the range [0, 5000]
- -5000 <= Node.val <= 5000

## Follow-up

A linked list can be reversed either iteratively or recursively. Could you implement both?

## Function Skeleton

```javascript
/**
 * Definition for singly-linked list node
 */
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    // Your code here
}

module.exports = { reverseList, ListNode };
```
