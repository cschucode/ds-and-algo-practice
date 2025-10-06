const maxProfit = require('./solution');

function runTests() {
    console.log('Running Best Time to Buy and Sell Stock tests...');
    
    // Test 1: Basic example
    const test1 = maxProfit([7,1,5,3,6,4]);
    console.log(test1 === 5 ? '✓ Test 1 passed: [7,1,5,3,6,4]' : `✗ Test 1 failed: Expected 5, got ${test1}`);
    
    // Test 2: No profit possible
    const test2 = maxProfit([7,6,4,3,1]);
    console.log(test2 === 0 ? '✓ Test 2 passed: [7,6,4,3,1]' : `✗ Test 2 failed: Expected 0, got ${test2}`);
    
    // Test 3: Increasing prices
    const test3 = maxProfit([1,2,3,4,5]);
    console.log(test3 === 4 ? '✓ Test 3 passed: [1,2,3,4,5]' : `✗ Test 3 failed: Expected 4, got ${test3}`);
    
    // Test 4: Single element
    const test4 = maxProfit([5]);
    console.log(test4 === 0 ? '✓ Test 4 passed: single element' : `✗ Test 4 failed: Expected 0, got ${test4}`);
    
    // Test 5: Two elements - profit
    const test5 = maxProfit([1,5]);
    console.log(test5 === 4 ? '✓ Test 5 passed: [1,5]' : `✗ Test 5 failed: Expected 4, got ${test5}`);
    
    // Test 6: Two elements - no profit
    const test6 = maxProfit([5,1]);
    console.log(test6 === 0 ? '✓ Test 6 passed: [5,1]' : `✗ Test 6 failed: Expected 0, got ${test6}`);
    
    // Test 7: Multiple peaks and valleys
    const test7 = maxProfit([3,3,5,0,0,3,1,4]);
    console.log(test7 === 4 ? '✓ Test 7 passed: multiple peaks' : `✗ Test 7 failed: Expected 4, got ${test7}`);
    
    console.log('Tests complete!');
}

runTests();
