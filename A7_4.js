//4. Given a linked list, 
//check if the linked list has a loop.
//Linked list can contain self loop.


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.add = function (data) {
  var newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
};

LinkedList.prototype.detectLoop = function () {
  var slowptr = this.head;
  var fastptr = this.head;
  while (slowptr != null && fastptr != null && fastptr.next != null) {
    slowptr = slowptr.next;
    fastptr = fastptr.next.next;
    if (slowptr == fastptr) {
      console.log('The list has a loop')
      return 1;
    }
    }
  return 0;
}

var LL = new LinkedList();
LL.add(20);
LL.add(4);
LL.add(15);
LL.add(10);


LL.head.next.next.next.next = LL.head;
LL.detectLoop();







