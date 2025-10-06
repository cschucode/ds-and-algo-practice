/**
 * @param {number[]} prices
 * @return {number}
 */
// [7,1,5,3,6,4]
function maxProfit(prices) {
    // Your code here
    let minPriceSeen = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
      let currPrice = prices[i];

      minPriceSeen = Math.min(minPriceSeen, currPrice);
      
      if (currPrice - minPriceSeen > maxProfit) {
        maxProfit = currPrice - minPriceSeen;
      }
    }

    return maxProfit;
}

module.exports = maxProfit;
