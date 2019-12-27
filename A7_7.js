//7. Given a Linked List where every node represents a linked list 
//and contains two pointers of its type:
// (i) a next pointer to the next node
// (ii) a bottom pointer to a linked list where this node is head.
// You have to flatten the linked list to a single linked list which is
// For Ex: Shown below is a given linked list
// Write a function flatten() to flatten the lists into a single linked list.
// The flattened linked list should also be sorted.For example, 
// for the above input list,
// output list should be 5 -> 7 -> 8 -> 10 -> 19 -> 20 -> 22 -> 28 -> 30 -> 35 -> 40 -> 45 -> 50.

class LinkedList
{
  constructor()
  {
    this.head = null;
  }
}

class Node
{
  constructor(data)
  {
    this.data = data;
    this.right = null;
    this.down = null;
  }
}


LinkedList.prototype.merge = function (a, b)
{
  
  if (a == null) return b;

  
  if (b == null) return a;

  
  var result;
  if (a.data < b.data)
  {
    result = a;
    result.down = this.merge(a.down, b); 
  }
  else
  {
    result = b;
    result.down = this.merge(a, b.down);
  } 
  return result;
} 


LinkedList.prototype.flatten = function (root)
{
  
  if (root == null || root.right == null)
    return root;

 
   root.right = this.flatten(root.right);

 
  root = this.merge(root, root.right);

  
  return root; 
}


LinkedList.prototype.push = function (headref, data)
{
  
  var newNode = new Node(data);
  
  newNode.down = headref;
  
  headref = newNode;
  
  return headref;
}

LinkedList.prototype.printList = function ()
{
  var temp = this.head;
  var string = '';
  while (temp != null)
  {
    string += temp.data + " ";
    temp = temp.down;
  }
  console.log(string.trim());
  
}

var L = new LinkedList();
L.head = L.push(L.head, 30);
L.head = L.push(L.head, 8);
L.head = L.push(L.head, 7);
L.head = L.push(L.head, 5);

L.head.right = L.push(L.head.right, 20);
L.head.right = L.push(L.head.right, 10);

L.head.right.right = L.push(L.head.right.right, 50);
L.head.right.right = L.push(L.head.right.right, 22);
L.head.right.right = L.push(L.head.right.right, 19);

L.head.right.right.right = L.push(L.head.right.right.right, 45);
L.head.right.right.right = L.push(L.head.right.right.right, 40);
L.head.right.right.right = L.push(L.head.right.right.right, 35);
L.head.right.right.right = L.push(L.head.right.right.right, 20);

L.head = L.flatten(L.head); 
L.printList(); 
