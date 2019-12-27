//5. Given a linked list, 
//the task is to find the n'th node from the end.

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

LinkedList.prototype.printNthFromLast = function (k) {
  var len = 0;
  var temp = this.head;


  while (temp != null)
  {
    temp = temp.next;
    len++;
  }
  
  if (len < k)
    return;
  temp = this.head;

  
    for (var i = 1; i < len - (k + 1); i++)
    temp = temp.next;
    console.log(temp.data);
 
}

LinkedList.prototype.add = function (data)
{
  var newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
  
}


var LL = new LinkedList();
LL.add(20);
LL.add(4);
LL.add(15);
LL.add(35);
LL.printNthFromLast(4);




