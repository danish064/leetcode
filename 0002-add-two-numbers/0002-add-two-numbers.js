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
    let ptr1 = l1;
    let ptr2 = l2;
    let carry = 0;
    while (ptr1 != null || ptr2 != null || carry > 0) {
        let num1 = ptr1 ? ptr1.val : 0;
        let num2 = ptr2 ? ptr2.val : 0;
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

        ptr1 = ptr1?.next ? ptr1.next : null;
        ptr2 = ptr2?.next ? ptr2.next : null;
    }
    return resultList.next;
};