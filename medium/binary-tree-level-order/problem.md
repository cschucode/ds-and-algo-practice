# Binary Tree Level Order Traversal

## Difficulty: Medium

## Description

Given the `root` of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).

## Examples

```javascript
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Input: root = [1]
Output: [[1]]

Input: root = []
Output: []
```

## Constraints

- The number of nodes in the tree is in the range [0, 2000]
- -1000 <= Node.val <= 1000

## Function Skeleton

```javascript
/**
 * Definition for a binary tree node
 */
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    // Your code here
}

module.exports = { levelOrder, TreeNode };
```
