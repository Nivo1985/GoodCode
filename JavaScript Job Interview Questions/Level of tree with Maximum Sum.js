// Microsoft
//     1          Level 0 - Sum: 1
//    / \
//   4   5        Level 1 - Sum: 9
//  / \ / \
// 3  2 4 -1      Level 2 - Sum: 8

function FindLevelWithMaxSum(tree) {
  let sumTable = [];

  search(tree, 0);

  return sumTable.indexOf(Math.max(...sumTable));

  function search(node, level) {
    if (node) {
      updateTable(node.v, level);
      if (node.l) search(node.l, level + 1);
      if (node.r) search(node.r, level + 1);
    }
  }

  function updateTable(value, level) {
    if (sumTable[level] === undefined) sumTable[level] = 0;
    sumTable[level] += value;
  }
}

class Node {
  constructor(v, l, r) {
    this.v = v;
    this.l = l;
    this.r = r;
  }
}

let tree = new Node(
  1,
  new Node(4, new Node(3), new Node(2)),
  new Node(5, new Node(4), new Node(-1))
);

let result = FindLevelWithMaxSum(tree);
console.log(result);
let i = 0;
