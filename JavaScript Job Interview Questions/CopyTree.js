//            A
//        /       \
//       B         C
//      / \       /  \
//     D     E   F    G

class TreeNode {
  constructor(id, leftNode, rightNode) {
    this.id = id;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }

  makeNodeCopy() {
    return new TreeNode(this.id + "_C", null, null);
  }
}

function CopyTree(node) {
  if (node) {
    let result = node.makeNodeCopy();
    result.leftNode = CopyTree(node.leftNode);
    result.rightNode = CopyTree(node.rightNode);
    return result;
  }
}

let tree = new TreeNode(
  "A",
  new TreeNode("B", new TreeNode("D"), new TreeNode("E")),
  new TreeNode("C", new TreeNode("F"), new TreeNode("G"))
);

let newTree = CopyTree(tree);

console.log(newTree);
