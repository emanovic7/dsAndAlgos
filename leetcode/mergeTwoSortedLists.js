

// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

 const mergeTwoSortedLists = (list1, list2) => {
   let newList = new NewNode(0);
    let head = newList;

    while(l1 !== null && l2 !== null){
        if(l1.val <= l2.val){
            newList.next = l1;
            l1 = l1.next
        }else {
            newList.next = l2;
            l2 = l2.next
        }
        newList = newList.next;
    }
    if(l1 !== null ){
        newList.next = l1
    }
    else{
        newList.next = l2
    }
    return head.next
};



class NewNode {
    constructor(val, next){
        this.val = val;
        this.next = next;
    }
 }
