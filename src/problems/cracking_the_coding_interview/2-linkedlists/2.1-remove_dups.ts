/**
 * Remove Dups: Write code to remove duplicates from an unsorted linked list.
 * FOLLOW UP: How would you solve this problem if a temporary buffer is not allowed? 
 */

import {SignlyLinkedList, SinglyNode} from "../../../ds/linkedlist/singly"

function remove_dups_v1(ll: SignlyLinkedList<number>): SignlyLinkedList<number> {
    let set = new Set<number>()
    let current : SinglyNode<number> | null = ll.getHead();
    
    if(!current) return ll;
    // set.add(current.data)
    
    while(current && current.next != null) {
        if(set.has(current.next.data)) {
            current.next = current.next.next ? current.next.next : null
        } else {
            set.add(current.data)
        }
        current = current.next
    }

    return ll;
}

let ll = new SignlyLinkedList<number>()

ll.addLast(1) 
ll.addLast(2) 
ll.addLast(3) 
ll.addLast(4) 
ll.addLast(1) 
ll.addLast(2) 
ll.addLast(3) 

remove_dups_v1(ll)
// if(import.meta.vitest) {
//     const { describe, test, expect, beforeAll, afterAll } = import.meta.vitest
//     describe.concurrent('Testing 2.1 - Remove Dups', () => {
//         let ll = new SignlyLinkedList<number>()
//         beforeAll(() => {
//             ll.addLast(1) 
//             ll.addLast(2) 
//             ll.addLast(3) 
//             ll.addLast(4) 
//             ll.addLast(1) 
//             ll.addLast(2) 
//             ll.addLast(3) 
//         })
//         // afterAll(() => {
//         //     ll = new SignlyLinkedList<number>()
//         // })
//         test("Testing remove_dups_v1", () => {
//             let res = remove_dups_v1(ll)
//             let llData = res.getArray()
//             expect(llData).toEqual([1,2,3,4])
//         })
//     })
// }