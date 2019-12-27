// 6. Given two linked lists sorted in ascending order.
//Merge them in -place and return head of the
// merged list.For example, if first list is 10 -> 20 -> 30 
//and second list is 15 -> 17, then the result list
// should be 10 -> 15 -> 17 -> 20 -> 30.
// It is strongly recommended to do merging in -place using O(1) 
//extra space.

class Node
{
  constructor(data)
  {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor()
  {
    this.head = null;
  }
}

LinkedList.prototype.newNode = function (key)
{
  var temp = new Node();
  temp.data = key;
  temp.next = null;
  return temp;
}

LinkedList.prototype.printlist = function (node)
{
  var string = " ";
  while (node != null)
  {
    string += node.data + " ";
    node = node.next;
  }
  console.log(string.trim());
}

LinkedList.prototype.merge = function (list1, list2)
{
  if (list1 == null)
    return list2;
  if (list2 == null)
    return list1;

  if (list1.data < list2.data) {
    list1.next = this.merge(list1.next, list2);
    return list1;
   }
  else
  {
    list2.next = this.merge(list1, list2.next);
    return list2;
      }
}

var LL = new LinkedList();


var head1 = LL.newNode(1);
head1.next = LL.newNode(3);
head1.next.next = LL.newNode(5);
 // 1->3->5 LinkedList created 
var head2 = LL.newNode(0);
head2.next = LL.newNode(2);
head2.next.next = LL.newNode(4);
// 0->2->4 LinkedList created 
var mergehead = LL.merge(head1, head2);
LL.printlist(mergehead);


