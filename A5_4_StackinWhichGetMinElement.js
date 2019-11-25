/*4. Implement a Stack in which you can get min element in O(1) time 
and O(1) space.*/

class Stack {
  constructor() {
    this.stack = [];
    this.minEle;
  }

  getMin() {
    if (this.stack.length == 0) {
      console.log("Stack is empty");
    } else console.log("Minimum Element in the stack is:", this.minEle);
  }

  pop() {
    if (this.stack.length == 0) {
      console.log("Stack is empty");
      return;
    }

    var val = this.stack.pop();

    if (val < this.minEle) {
      var returnVal = this.minEle;
      this.minEle = 2 * this.minEle - val;
      return;
      //this.stack.pop()
    } else {
      returnVal = val;
      return returnVal;
    }
  }

  push(data) {
    var temp;

    if (this.stack.length === 0) {
      this.minEle = data;
      this.stack.push(data);
    } else if (data < this.minEle) {
      temp = data * 2 - this.minEle;
      this.minEle = data;
      this.stack.push(temp);
    } else {
      this.stack.push(data);
    }
  }
}
var s = new Stack();
s.push(3);
s.push(2);
s.push(5);
s.push(1);
console.log(s);
s.getMin();
s.pop();
s.getMin();
s.push(0);
s.getMin();
console.log(s);
