//1. Given a singly linked list,find middle of the linked list.
//For example, if given linked list is 1 -> 2 -> 3 -
//> 4 -> 5 then output should be 3.
//If there are even nodes, then there would be two middle nodes,
//we need to print second middle element.
//For example, if given linked list is 1 -> 2 -> 3 -> 4 -> 5 -> 6
//then output should be 4.



class Node
{
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList
{
  constructor() {
    this.head = null;
     }
}

LinkedList.prototype.add = function (data)
{

  var node = new Node(data);
  
  if (!this.head) {
    this.head = node;
  }
  else {
    
    var tail = this.head;
    while (tail.next !== null)
    {
      tail = tail.next;
      }
    tail.next = node;
    return this.head;
    }
  };

LinkedList.prototype.middle = function (head) {
  var slowPtr = head;
  var fastPtr = head;
  if (head != null)
  {
    while (fastPtr != null && fastPtr.next != null)
    {
      fastPtr = fastPtr.next.next;
      
      slowPtr = slowPtr.next;
      
    }
    console.log("The middle element is", slowPtr.data);
    }
}

LinkedList.prototype.print = function() {
  var string = "";
  var current = this.head;
  while (current) {
    string += current.data + " ";
    current = current.next;
  }
  console.log(string.trim());
};


  var LL = new LinkedList();
  LL.add(10);
  LL.add(20);
  LL.add(30);
  LL.add(40);
  LL.add(50);
  LL.add(60);
  LL.print();
  LL.middle(LL.head);

  

