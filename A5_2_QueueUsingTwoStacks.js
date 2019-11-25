//2. Implement a Queue using 2 stacks s1 and s2 .

// class Stack
// {
//   constructor()
//   {
//     this.stack = [];
//   }
//   push(item)
//   {
//     this.stack.push(item);
//   }

//   pop()
//   {
//     return this.stack.pop();
//   }
// }

// class Queue {
//   constructor()
//   {
//     this.queue = [];
//   }
//   enqueue(item)
//   {
//     return this.queue.push(item);
//   }

//   dequeue()
//   {
//     var s1 = new Stack();
//     var s2 = new Stack();
//     var len = this.queue.length
//     for (var i = 0; i < len; i++)
//     {
//       s1.push(this.queue.pop());
//       //console.log('s1', s1)
//     }

//     for (var i = 0; i < len; i++)
//     {
//       s2.push(s1.pop());
//       //console.log('s2', s2)
//     }
//     return s2.pop();

//   }
// }

// q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// console.log(q.dequeue());
// console.log(q.dequeue());
// //console.log(q1.dequeue());
// //console.log(q1.dequeue());

var Stack1 = [];
var Stack2 = [];

function Enqueue(element) {
  return Stack1.push(element);
  //console.log(Stack1);
}

function Dequeue() {
  if (Stack1.length === 0 && Stack2.length === 0) {
    return "Qqueue is empty";
  }
  if (Stack2.length === 0) {
    while (Stack1.length !== 0) {
      var p = Stack1.pop();
      Stack2.push(p);
      //console.log(Stack2);
    }
  }

  return Stack2.pop();
  //console.log(Stack2);
}

Enqueue("apple");
Enqueue("banana");
Enqueue("orange");
Enqueue("kiwi");
Enqueue("strawberry");
console.log(Stack1);

console.log(Dequeue());
console.log(Dequeue());
//console.log(Dequeue(), '-Dequeued Element');
console.log(Stack2);
