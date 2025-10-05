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
  if (!head) return head;
  // set prev node to null
  let prev = null

  // set current node to head
  let curr = head;

  // iterate over list
  while (curr) {
    // get remaining list nodes
    let next = curr.next;
    // move next property to previous node
    curr.next = prev;
    // set prev to the curr node
    prev = curr;
    // move to next node
    curr = next;
  }

  // return curr which is reversed link list
  return prev;
}

module.exports = { reverseList, ListNode };
