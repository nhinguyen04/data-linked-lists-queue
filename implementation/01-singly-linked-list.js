// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        if (this.head) {
            const newHead = new SinglyLinkedNode(val, this.head);
            this.head = newHead;
        } else {
            this.head = new SinglyLinkedNode(val);
        }

        this.length++;
        return this;
        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    addToTail(val) {
        // Fixed bugs
        // Write your hypothesis on the time complexity of this method here
        // time: O(n)

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let current = this.head;
        while (current) {
            if (current.next === null) {
                current.next = newNode;
                return this;
            } else {
                current = current.next;
            }
        }
    }

    removeFromHead() {
        if (this.head === null) {
            return undefined;
        }

        const oldHead = this.head;
        const newHead = this.head.next;
        this.head = newHead;
        this.length--;

        return oldHead;
    }

    removeFromTail() {
        let current = this.head;
        let previous = this.head;

        // list empty, return undef
        if (this.head === null) {
            return undefined;
        }

        // list only 1 node
        if (current.next === null) {
            this.length--;
            this.head = null;
            return current;
        }

        // get tail node
        while (current) {

            // current node is last, end loop
            if (current.next === null) {
                previous.next = null;
                this.length--;
                return current;
            }

            // move on to next node
            if (previous !== current) {
                previous = current;
            }
            current = current.next;
        }


    }

    peekAtHead() {

        if (this.head === null) {
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time: O(1)
    }

    print() {
        if (this.head) {
            let current = this.head;
            while (current) {
                console.log(current.value);
                current = current.next;
                if (current === null) {
                    return;
                }
            }
        }

        // Write your hypothesis on the time complexity of this method here
        // time: O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
