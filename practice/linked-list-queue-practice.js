// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list

        // O(1) : return this.length;

        // O(n)
        let count = 0;
        if (this.head === null) {
            return 0;
        }

        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let sum = 0;
        if (this.head === null) {
            return 0;
        }

        let current = this.head;
        while (current) {
            sum += current.value;
            current = current.next;
        }

        return sum;

        // Write your hypothesis on the time complexity of this method here
        // time: O(n)
    }

    averageValue() {
        // Returns the average value of all the nodes


        let sum = this.sumOfNodes();
        let nodeCount = this.listLength();

        return sum / nodeCount;

        // Write your hypothesis on the time complexity of this method here
        // time: O(n)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (this.head === null) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {
        // Returns the middle node
        let num = Math.floor((this.length - 1) / 2);

        return this.findNthNode(num);
        // Implement this as a singly linked list then as a doubly linked list
        // How do the implementation for singly and doubly vary if at all?
        // singly vs doubly does not change

        // Write your hypothesis on the time complexity of this method here
        // time: O(n / 2) = O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new SinglyLinkedList();
        const length = this.length - 1;

        for (let i = length; i >= 0; i--) {
            const current = this.findNthNode(i);
            newList.addToTail(current.value);
        }

        return newList;
        // Write your hypothesis on the time complexity of this method here
        // time: O(n^2)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let right = this.length - 1;
        let left = 0;

        const mid = this.findMid().value;
        for (let i = 0; i < mid; i++) {
            const rightNode = this.findNthNode(right);
            const rightVal = rightNode.value;
            const leftNode = this.findNthNode(left);
            const leftVal = leftNode.value;

            // swap
            rightNode.value = leftVal;
            leftNode.value = rightVal;

            // move index
            right--;
            left++;
        }

        return this;
        // Write your hypothesis on the time complexity of this method here
        // time: O(n)
    }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);
        this.length++;

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        if (this.head === null) {
            return undefined;
        }

        let current = this.head;
        for (let i = 0; i < n; i++) {
            current = current.next;
        }

        return current;
    }

    findMid() {
        let num = Math.floor((this.length - 1) / 2);

        let current = this.head;
        for (let i = 0; i < num; i++) {
            current = current.next;
        }

        return current;
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const newList = new DoublyLinkedList();
        const length = this.length - 1;

        for (let i = length; i >= 0; i--) {
            const current = this.findNthNode(i);
            newList.addToTail(current.value);
        }

        return newList;

        // Write your hypothesis on the time complexity of this method here
        // time: O(n)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let right = this.length - 1;
        let left = 0;

        const mid = this.findMid().value;
        for (let i = 0; i < mid; i++) {
            const rightNode = this.findNthNode(right);
            const rightVal = rightNode.value;
            const leftNode = this.findNthNode(left);
            const leftVal = leftNode.value;

            // swap
            rightNode.value = leftVal;
            leftNode.value = rightVal;

            // move index
            right--;
            left++;
        }

        return this;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
