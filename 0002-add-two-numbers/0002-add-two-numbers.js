/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let resultList = new ListNode();
  let resultPtr = resultList;
  let carry = 0;
  while (l1 != null || l2 != null || carry > 0) {
    let num1 = l1 ? l1.val : 0;
    let num2 = l2 ? l2.val : 0;
    let sum = num1 + num2;
    if (carry > 0) {
      sum = sum + 1;
      carry = 0;
    }
    if (sum > 9) {
      sum = sum - 10;
      carry = 1;
    }
    const resultNode = new ListNode(sum);
    resultPtr.next = resultNode;
    resultPtr = resultNode;

    l1 = l1?.next ? l1.next : null;
    l2 = l2?.next ? l2.next : null;
  }
  return resultList.next;
};