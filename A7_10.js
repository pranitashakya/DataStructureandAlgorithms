// 10. Given a singly linked list of integers, 
//Your task is to complete the function isPalindrome that
// returns true if the given list is palindrome, 
//else returns false.

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
LinkedList.prototype.isPalindrome = function (head)
{
  var slow = head;
  var ispalin = true;
  var stack = [];
  while (slow != null)
  {
    stack.push(slow.data);
    slow = slow.next;
  }
  while (head != null) {
    var i = stack.pop();
    if (head.data == i)
    {
      ispalin = true;
      
    }
    else {
      ispalin = false;
      
      break;
    }
    head = head.next;
  }
  return ispalin;
}

var LL = new LinkedList();
var one = new Node(1);
var two = new Node(2);
var three = new Node(3);
var four = new Node(4);
var five = new Node(3);
var six = new Node(2);
var seven = new Node(1);
one.next = two;
two.next = three;
three.next = null;
three.next = four;
four.next = five;
five.next = six;
six.next = seven;
seven.next = null;
var condition = LL.isPalindrome(one);
console.log("isPalindrome is " + condition);

 
