/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//           p
// [1, 2, 3, 4, 5]
//              c
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// function rotateRight(head, k) {
//   if (!head || head.next) return head;
//   // get length of list
//   const length = getLength(head);
//   const numToRotate = k % length;

//   for (let i = 0; i < numToRotate; i++) {
//     // make the last node the first
//     let current = head;
//     let prev = null;

//     // loop to the tail
//     while (current.next) {
//       prev = current;
//       current = current.next;
//     }

//     // we have to remove the tail
//     prev.next = null;

//     // make the tail the head
//     current.next = head;
//     head = current;
//   }

//   return head;
// }

// function getLength(list) {
//   let length = 0;
//   while (list) {
//     length++;
//     list = list.next;
//   }
//   return length;
// }

function rotateRight(head, k) {
  if (!head || !head.next) return head;

  let tail = head;
  let length = 1;

  // find the tail and calculate length of list
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  // connect list making it circular
  tail.next = head;

  // get effective k meaning efficient algorithm to avoid rotating unnecessarily
  let effectiveK = k % length;
  // get nums to rotate minus one more to find new tail
  let stepsToNewHead = length - effectiveK;

  // find new tail
  let newTail = head;

  for (let i = 0; i < stepsToNewHead - 1; i++) {
    newTail = newTail.next;
  }

  // set the new head
  let newHead = newTail.next;

  // break the cycle
  newTail.next = null;

  // return linked list
  return newHead;
}


module.exports = rotateRight;
