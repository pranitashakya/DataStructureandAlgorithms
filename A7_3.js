// 3. Given a linked list, write a function to reverse every k nodes
//(where k is an input to the function).
//If a linked list is given as 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> NULL
//and k = 3 then output will be 3->2->1->6->5->4->8->7->NULL.

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

LinkedList.prototype.add = function (data)
{

  var newNode = new Node(data);

  newNode.next = this.head;
 
  this.head = newNode;
};

LinkedList.prototype.reverse = function(head, k) {
  var current = head;
  var next = null;
  var prev = null;
  var cnt = 0;

  while (cnt < k && current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    cnt++;
    }

  if (next != null) {
    this.head.next = this.reverse(next, k);
  }

   return prev;
};


LinkedList.prototype.print = function () {
  
  var temp = this.head;
  var string = " ";
  while (temp != null)
  {
    string += temp.data + " ";
    temp = temp.next;
  }
  console.log(string.trim());
};

var LL = new LinkedList();
LL.add(1);
LL.add(2);
LL.add(3);
LL.add(4);
LL.add(5);
LL.add(6);
LL.add(7);
LL.add(8);
LL.print();
LL.head = LL.reverse(LL.head,4);
LL.print();
