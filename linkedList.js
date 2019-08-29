class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertBefore(targetItem, item) {
    //A B C F
    //find f then keep track and check c
    // two temp nodes (previous, and current)
    if (this.head === null) {
      this.insertFirst(item);
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== targetItem) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    let tempNode = previousNode;
    tempNode.next = new _Node(item, previousNode.next);
  }

  insertAfter(targetItem, item) {
    // If the list is empty
    if (this.head === null) {
      this.insertFirst(item);
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;
    while (currNode !== null && currNode.value !== targetItem) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    let tempNode = currNode;
    tempNode.next = new _Node(item, currNode.next);
  }

  insertAt(item, position) {
    let currNode = this.head;
    if (position === 0) {
      this.insertFirst(item);
      return;
    }
    for (let i = 0; i < position - 1; i++) {
      if (currNode !== null) {
        currNode = currNode.next;
      } else {
        console.log('Invalid position');
        return;
      }
    }
    let tempNode = currNode;
    tempNode.next = new _Node(item, currNode.next);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
         and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

let SLL = new LinkedList();

function main(SLL) {
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  //inserts athena before boomer
  SLL.insertBefore('Boomer', 'Athena');
  //inserts hotdog after helo
  SLL.insertAfter('Helo', 'hotdog');
  //Squirrel does not exist so returns item not found
  // SLL.remove('Squirrel');
  //index too large
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  return SLL;
}

function display(SLL) {
  let currNode = SLL.head;
  let list = [];
  while (currNode !== null) {
    list.push(currNode.value);
    currNode = currNode.next;
  }
  return list;
}

function size(SLL) {
  let currNode = SLL.head;
  let size = 0;
  while (currNode !== null) {
    size++;
    currNode = currNode.next;
  }
  return size;
}

function isEmpty(SLL) {
  if (!SLL.head) {
    return 'List is empty';
  } else {
    return 'List is not empty';
  }
}

function findPreviousNode(SLL, targetItem) {
  // Start at the head
  let currNode = SLL.head;
  // Keep track of previous
  let previousNode = SLL.head;
  while (currNode !== null && currNode.value !== targetItem) {
    // Save the previous node
    previousNode = currNode;
    currNode = currNode.next;
  }
  if (currNode === null) {
    console.log('Item not found');
    return;
  }

  return previousNode;
}

function findLastNode(SLL){
  let tempNode = SLL.head;
  while (tempNode.next !== null) {
    tempNode = tempNode.next;
  }

  return tempNode;
}

main(SLL);
console.log(display(SLL));
console.log(size(SLL));
console.log(isEmpty(SLL));
console.log(findPreviousNode(SLL, 'Kat'));
console.log(findLastNode(SLL));
