//QUESTION
// Given the root node of a binary search tree (BST) and a value.
// You need to find the node in the BST that the node's value equals the given value.
// Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

// For example
// Given the tree:
//         4
//        / \
//       2   7
//      / \
//     1   3
//
// And the value to search: 2
// You should return this subtree:
//
//       2
//      / \
//     1   3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */


//SOLUTION

//doesn't pass null test case

const searchBST = (root, val) => {
  let queue = [];
  let currentNode = root;
  queue.push(currentNode);

  while(queue.length){
    let currentNode = queue.shift();
    if(currentNode.left){
      queue.push(currentNode.left);
    }
    if(currentNode.right){
      queue.push(currentNode.right)
    }

    if(currentNode.val === val){
      return currentNode;
    }
  }

  return NULL;
}
