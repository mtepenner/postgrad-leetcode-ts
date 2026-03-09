

class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }
// Function definition: Takes two linked list heads and returns a new linked list head
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // Creates a placeholder 'dummy' node to simplify building the result list
    let dummyHead = new ListNode(0);
    // Initializes a pointer 'current' to track our progress through the new list
    let current = dummyHead;
    // Variable to store the "tens" digit if a sum exceeds 9
    let carry = 0;


    // Continue as long as there are nodes to process or a leftover carry to add
    while(l1 !== null || l2 !== null || carry != 0) {
        // Get value from list 1, or 0 if we've reached the end
        let val1 = l1 !== null ? l1.val : 0;
        // Get value from list 2, or 0 if we've reached the end
        let val2 = l2 !== null ? l2.val : 0;


        // Calculate the total for this digit position including the previous carry
        let sum = val1 + val2 + carry;
        // Determine the new carry (either 1 or 0) for the next position
        carry = Math.floor(sum / 10);


        // Create a new node with the single-digit remainder (sum modulo 10)
        current.next = new ListNode(sum % 10);


        // Move the current pointer to the newly created node
        current = current.next;
        // Advance l1 to the next node if it exists
        if (l1 !== null) l1 = l1.next;
        // Advance l2 to the next node if it exists
        if (l2 !== null) l2 = l2.next;
    }
    // Return the actual head (the node immediately following our dummy placeholder)
    return dummyHead.next;
};
