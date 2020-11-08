// Twitter

//          1
//        /   \
//       1     1
//      /     / \
//     2     1   1
//    /
//   1

//   FilterOut(tree,1)
//          1
//        /
//       1
//      /
//     2

class TreeNode {
  constructor(id, leftNode, rightNode) {
    this.id = id;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

let tree = new TreeNode(
  1,
  new TreeNode(1, new TreeNode(2, new TreeNode(1, null, null), null), null),
  new TreeNode(1, new TreeNode(1, null, null), new TreeNode(1, null, null))
);

function FilterOut(node, value) {
  if (node.leftNode) node.leftNode = FilterOut(node.leftNode, value);
  if (node.rightNode) node.rightNode = FilterOut(node.rightNode, value);
  if (!node.rightNode && !node.leftNode && node.id === value) node = null;

  return node;
}

tree = FilterOut(tree, 1);
console.log(tree);
