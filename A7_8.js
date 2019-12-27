// 8. Given a singly linked list, write a function 
//to swap elements pairwise.For example, if the linked
// list is 1 -> 2 -> 3 -> 4 -> 5 
//then the function should change it to 2 -> 1 -> 4 -> 3 -> 5, 
//and if the linked list is
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 
//then the function should change it to 2 -> 1 -> 4 -> 3 -> 6 -> 5.

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

LinkedList.prototype.pairWiseSwap = function (head) {
  var temp = this.head;
  while (temp != null && temp.next != null)
    
  {
    
    var k = temp.data;
    temp.data = temp.next.data;
    temp.next.data = k;
    temp = temp.next.next;
  }
}

LinkedList.prototype.push = function (newData)
{
  var newNode = new Node(newData);
  newNode.next = this.head;
  this.head = newNode;
}
  

LinkedList.prototype.printlist = function () {
  var temp = this.head;
  var string = ''
  while (temp != null)
  {
    string += temp.data + " ";
    temp = temp.next;
  }
  console.log(string.trim());
}


var LL = new LinkedList();
LL.push(6);
LL.push(5);
LL.push(4);
LL.push(3);
LL.push(2);
LL.push(1);
LL.printlist();
LL.pairWiseSwap();
LL.printlist();






