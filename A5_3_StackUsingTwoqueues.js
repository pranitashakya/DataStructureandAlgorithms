//3. Implement a Stack using 2 queue q1 and q2 .

var Queue1 = [];
var Queue2 = [];

function push(element) {
  Queue1.push(element);
  return;
}
function pop() {
  if (Queue1.length === 0) {
    return "Queue is empty";
  }
  var size = Queue1.length - 1;
  while (Queue1.length > 1) {
    Queue2.push(Queue1.shift());
    //console.log(Queue2);
  }
  var lastEle = Queue1.pop();
  var tmp = Queue1;
  Queue1 = Queue2;
  Queue2 = tmp;
  return lastEle;
}
push(1);
push(2);
push(3);
push(4);
console.log(Queue1);
console.log("pop", pop());
console.log(Queue1);
//console.log(Queue2);
console.log("pop", pop());
console.log(Queue1);
//console.log(Queue2);
console.log("pop", pop());
console.log(Queue1);
//console.log(Queue2);
