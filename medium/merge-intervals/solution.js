/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {
  if (!intervals || intervals.length === 0) return [];
    // sort the intervals
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  // create result array and add first interval
  const resultArr = [sorted[0]];

  // loop over remaining intervals and check for overlap
  for (let i = 1; i < sorted.length; i++) {
    const lastIdx = resultArr.length - 1;
    const lastInterval = resultArr[lastIdx];
    const currentInterval = sorted[i];

    if (currentInterval[0] <= lastInterval[1]) {
      const mergedInterval = [lastInterval[0], Math.max(lastInterval[1], currentInterval[1])];
      resultArr[lastIdx] = mergedInterval;
    } else {
      resultArr.push(currentInterval);
    }
  }
  return resultArr;
}

module.exports = merge;
