// 2. Given a singly linked list, rotate the linked list 
//counter - clockwise by k nodes.Where k is a given
// positive integer smaller than or equal to length of the 
//linked list.For example, if the given linked
// list is 10 -> 20 -> 30 -> 40 -> 50 -> 60 and k is 4, 
//the list should be modified to 50 -> 60 -> 10 -> 20 -> 30 -
// > 40.


class Node
{
  constructor(data)
  {
    this.data = data;
    this.next = null;
  }
}

class LinkedList
{
  constructor()
  {
    this.head = null;
  }  
}

LinkedList.prototype.add = function (data)
{
  var newNode = new Node(data);
  
  if (this.head == null)
  
    this.head = newNode;
		
  else
  
  {
    newNode.next= this.head;
		this.head=newNode;
  }
};

LinkedList.prototype.rotate = function (k)
{
  if (k == 0) return;
  var current = this.head;
  var cnt = 1;
  
  while (cnt < k && current != null) 
  {
    current = current.next;
    cnt++;
  }

  if (current == null)
    return;
 
  var kthNode = current;

  while (current.next != null)
  current = current.next;
  
  current.next = this.head;
  
  this.head = kthNode.next;
 
  kthNode.next = null;
};

LinkedList.prototype.print = function ()
{
  var string = '';
  var current = this.head;
  while (current)
  {
    string += current.data + ' ';
    current = current.next;
  }
  console.log(string.trim());
};

var LL = new LinkedList();
LL.add(60);
LL.add(50);
LL.add(40);
LL.add(30);
LL.add(20);
LL.add(10);

LL.print(); 
LL.rotate(4);
LL.print();
