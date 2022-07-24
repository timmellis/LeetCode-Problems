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
var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let res = new ListNode()
    let current = res
    
    while(l1 || l2 || carry) {
        // console.log(res, current, l1, l2)
        let a=0 
        if (l1 && l2) a = l1.val + l2.val + carry
        else if (l1) a = l1.val + carry
        else if (l2) a = l2.val + carry
        else a = carry
        
        carry = 0
        
        if (a >= 10) {
            a -= 10
            carry++
        }
        current.val = a
        
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next

        if (l1 || l2 || carry) current.next = new ListNode()
        current = current.next
    }
    // console.log("RES = ", res)
    return res
};