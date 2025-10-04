const assert = require('assert');
const { levelOrder, TreeNode } = require('./solution');

console.log('Running Binary Tree Level Order Traversal tests...\n');

// Test 1
try {
    const root1 = new TreeNode(3);
    root1.left = new TreeNode(9);
    root1.right = new TreeNode(20);
    root1.right.left = new TreeNode(15);
    root1.right.right = new TreeNode(7);

    const result1 = levelOrder(root1);
    assert.deepStrictEqual(result1, [[3], [9, 20], [15, 7]]);
    console.log('✓ Test 1 passed: [3,9,20,null,null,15,7]');
} catch (error) {
    console.log('✗ Test 1 failed:', error.message);
}

// Test 2
try {
    const root2 = new TreeNode(1);
    const result2 = levelOrder(root2);
    assert.deepStrictEqual(result2, [[1]]);
    console.log('✓ Test 2 passed: single node');
} catch (error) {
    console.log('✗ Test 2 failed:', error.message);
}

// Test 3
try {
    const root3 = null;
    const result3 = levelOrder(root3);
    assert.deepStrictEqual(result3, []);
    console.log('✓ Test 3 passed: empty tree');
} catch (error) {
    console.log('✗ Test 3 failed:', error.message);
}

// Test 4
try {
    const root4 = new TreeNode(1);
    root4.left = new TreeNode(2);
    root4.right = new TreeNode(3);
    root4.left.left = new TreeNode(4);
    root4.left.right = new TreeNode(5);

    const result4 = levelOrder(root4);
    assert.deepStrictEqual(result4, [[1], [2, 3], [4, 5]]);
    console.log('✓ Test 4 passed: complete binary tree');
} catch (error) {
    console.log('✗ Test 4 failed:', error.message);
}

console.log('\nTests complete!');
