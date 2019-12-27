//9. Given two numbers represented by two lists, 
//write a function that returns sum list.The sum list
//is list representation of addition of two input numbers.
//Suppose you have two linked list 5 -> 4(4 5)and 5 -> 4 -> 3(3 4 5) 
//you have to return a resultant
//linked list 0 -> 9 -> 3(3 9 0).

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


LinkedList.prototype.addTwoLists = function (first, second)
{
  var res = null;
  // res is head node of the resultant list 
  var temp, prev = null;
  var carry = 0, sum;
   while (first != null || second != null)
  {
    
    if (!first)
    {
      var sum = carry + second.data;
      
    }
    
    else if (!second)
    {
      var sum = carry + first.data;
      
    }
    else {
      var sum = carry + first.data + second.data;
      

      if (sum >= 10)
        carry = 1
      else carry = 0
     
    }
    
    sum = sum % 10;
    
    temp = new Node(sum);
    
    
    if (res == null) {
      res = temp;
      
    }
    else {
      prev.next = temp;
      
    }

    prev = temp;
   
    if (first != null) {
      first = first.next;
      
    }
    if (second != null) {
      second = second.next;
      
    }
  }

if (carry > 0) {
  temp.next = new Node(carry);
}

  return res; 
  
}

LinkedList.prototype.printList = function (head) 
{
  var string = '';
  while (head != null)
  {
    string += head.data + " ";
    head = head.next;
  }
  console.log(string.trim());
}
  
var list = new LinkedList();

list.head1 = new Node(5);
list.head1.next = new Node(4);

//list1 4->5
list.printList(list.head1);

// creating seconnd list 
list.head2 = new Node(5);
list.head2.next = new Node(4);
list.head2.next.next = new Node(3);
//list2 3->4->5
list.printList(list.head2);


var rs = list.addTwoLists(list.head1, list.head2);

list.printList(rs);
//output 3->9->0
