/*1. Given an array, print the Next Greater Element (NGE) 
for every element. The Next greater Element for an element x 
is the first greater element on the right side of x in array. 
Elements for which no greater element exist, consider next greater 
element as -1.
*/

//method1://
// function nextGreaterElement(arr)
// {
//   var nextnum;
//   for (var i = 0; i < arr.length; i++)
//   {
//     for (var j = i + 1; j < arr.length; j++)
//     {
//
//         {
//         nextnum = arr[i];
//         break;  if (arr[i] < arr[j])
//         }
//     }
//     return(nextnum)
//     }
// }
// console.log(nextGreaterElement([4,5,2,25]));

//method2://

function nextGreaterElement(arr) {
  var stackArr = [];

  if (arr.length === 0 || arr.length < 0) {
    console.log("Array is empty or blank");
    //return 0;
  }

  //Push the first element to stack.
  stackArr.push(arr[0]);

  for (var i = 1; i < arr.length; i++) {
    var curr = arr[i];
    while (stackArr.length !== 0) {
      var stackEle = stackArr.pop();
      if (stackEle < curr) {
        console.log("Next element for", stackEle, "is", curr);
        // This loop prints and discards all local pairs whose next larger has been found.
      } else {
        stackArr.push(stackEle);
        break;
      }
    }

    stackArr.push(curr);
  }

  // The elements left in the stack have no next larger element.

  while (stackArr.length !== 0) {
    var leftoverEle = stackArr.pop();
    console.log("Next element for", leftoverEle, "is", -1);
  }
}

nextGreaterElement([11, 13, 21, 3]);
