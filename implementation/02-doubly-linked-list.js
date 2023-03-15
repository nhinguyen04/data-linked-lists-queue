// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val, next = null, prev = null) {
        this.value = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // time: O(1)

        // Add node of val to head of linked list
        let newHead = new DoublyLinkedNode(val);

        // list not empty
        if (this.length > 0) {
            this.head.prev = newHead; // head.prev = newHead
            newHead.next = this.head; // newHead.next = head
            this.head = newHead; // head = newHead
        } else {
            // list empty
            this.head = newHead;
            this.tail = newHead;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newTail = new DoublyLinkedNode(val);

        if (this.length === 0) {
            // list empty
            this.head = newTail;
            this.tail = newTail;
        } else {
            this.tail.next = newTail;
            newTail.prev = this.tail;
            this.tail = newTail;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (this.length === 0) {
            return undefined;
        }

        // remove head
        const removedHead = this.head;

        // set current head's previous pointer to null
        if (this.length > 1) {
            this.head = removedHead.next;
            const currentHead = this.head;
            currentHead.prev = null;
        } else {
            this.head = null;
        }

        // update length
        this.length--;

        // return removed head value
        return removedHead.value;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length === 0) {
            return undefined;
        }

        const removedTail = this.tail;
        if (this.length > 1) {
            const newTail = removedTail.prev;
            newTail.next = null;
            this.tail = newTail;
        } else {
            this.tail = null;
        }

        this.length--;
        return removedTail.value;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    peekAtHead() {
        if (this.length === 0) {
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    peekAtTail() {
        if (this.length === 0) {
            return undefined;
        }

        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
