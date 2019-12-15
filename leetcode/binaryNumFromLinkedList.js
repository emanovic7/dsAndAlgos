//QUESTION

// Given head which is a reference node to a singly-linked list.
// The value of each node in the linked list is either 0 or 1.
// The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

// Example 1:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10
//
// Example 2:
// Input: head = [1,0,0,1,0,0,1,1,1,0,0,0,0,0,0]
// Output: 18880

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */


const returnDecimal = (head) => {
  let list = [];
  let currentNode = head;
  let binarySum = "";
  list.push(currentNode);

  while(list.length){
    currentNode = list.shift();
    binarySum += currentNode.val;
    if(currentNode.next){
      list.push(currentNode.next)
    }
  }

  return parseInt(binarySum, 2);
}
