//          1
//        /   \
//       2     3
//      /     / \
//     4     5   6
//          /     \
//         7       8

class TreeNode {
  constructor(id, leftNode, rightNode) {
    this.id = id;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

function FindMinimumDepth(node, level = 1) {
  let queue = [{ node: node, level: level }];

  return Search();

  function Search() {
    let currentNode = queue.pop();
    if (
      (!currentNode.node.leftNode || !currentNode.node.rightNode) &&
      currentNode.leftNode === 1
    )
      return 1;
    if (IsLastNode(currentNode.node)) return currentNode.level;
    if (currentNode.node.leftNode)
      queue.unshift({
        node: currentNode.node.leftNode,
        level: currentNode.level + 1,
      });
    if (currentNode.node.rightNode)
      queue.unshift({
        node: currentNode.node.rightNode,
        level: currentNode.level + 1,
      });

    return Search();
  }
}

let IsLastNode = (treeNode) => !treeNode.leftNode && !treeNode.rightNode;

let tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4, null, null), null),
  new TreeNode(
    3,
    new TreeNode(5, new TreeNode(7, null, null), null),
    new TreeNode(6, null, new TreeNode(8, null, null))
  )
);

console.log(FindMinimumDepth(tree));
