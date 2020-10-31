//          1
//        /   \
//       2     3
//      /     / \
//     4     5   6
//          /     \
//         7       8

//123+1357+1368 = 2849

class TreeNode {
  constructor(id, leftNode, rightNode) {
    this.id = id;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

function FindRootToLeaf(node) {
  let result = 0;
  CountSum(node, `${node.id}`);

  return result;

  function CountSum(node, sumValue) {
    if (node.leftNode) CountSum(node.leftNode, sumValue + node.leftNode.id);
    if (node.rightNode) CountSum(node.rightNode, sumValue + node.rightNode.id);
    if (!node.leftNode && !node.rightNode) result += parseInt(sumValue);
  }
}

let tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), null),
  new TreeNode(
    3,
    new TreeNode(5, new TreeNode(7, null, null), null),
    new TreeNode(6, null, new TreeNode(8, null, null))
  )
);

console.log(FindRootToLeaf(tree));
