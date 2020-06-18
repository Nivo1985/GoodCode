// Microsoft

// Input:[[1, 3], [5, 8], [4, 10], [20, 25]]
// Output: [[1, 3], [4, 10], [20, 25]

// Input:[[1,4],[3,5],[2,4],[7,10]]
// Output: [[1,5],[7,10]]

//  cost < n*n

function mergeIntervals(intervals) {
  if (intervals.length <= 1) return intervals;

  var stack = [];
  var top = null;
  intervals = intervals.sort((x, y) => x[0] - y[0]);

  stack.push(intervals[0]);
  for (var i = 1; i < intervals.length; i++) {
    top = stack[stack.length - 1];
    if (top[1] < intervals[i][0]) {
      stack.push(intervals[i]);
    } else if (top[1] < intervals[i][1]) {
      top[1] = intervals[i][1];
    }
  }

  return stack;
}

let result = mergeIntervals([[1, 3], [5, 8], [4, 10], [20, 25]]);
console.log(result); // [[1, 3], [4, 10], [20, 25]

result = mergeIntervals([[1, 4], [3, 5], [2, 4], [7, 10]]);
console.log(result); // [[1,5],[7,10]]
