//Given the head of a linked list, remove the nth node from the end of the list and return its head.
/*Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

class ListNode {
    constructor(valueInput){
        this.value = valueInput;
        this.next = null;       
    }

    addNode (valueInput){
        this.next = new ListNode(valueInput)
        return this.next
    }
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {

    let current = head;
    let test = head;
    let previous = head;

    for(let i=0;i<n;i++){
        test = test.next;
    }

    if(test == null){
        if(n==1){
            head= null;
        }
        else{
            head = head.next;
        }
    }
    else{

        while(test != null){
            previous = current;
            current = current.next;
            test = test.next;
        }

        previous.next = current.next;
        current= null;
    }
    return head;     
};

myNode = new ListNode(1);
myNode.addNode(2).addNode(3).addNode(4).addNode(5);

removeNthFromEnd(myNode,1);

runner = myNode; 
while(runner!=null){
    console.log(runner.value);
    runner= runner.next;
}
