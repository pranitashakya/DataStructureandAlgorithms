/*Find the sum of contiguous subarray 
within a one - dimensional array of numbers 
which has the largest sum.*/
//For e.g:{ 1, -2, 5, -3, -1, 3}


function findMaxSubArray(arr) {
  if (arr.length === 0 || arr.length < 0) {
    console.log("Array is empty or all negatives");
    //return 0;
  }
  var curmax = 0,
    maxsum = 0;

  for (var i = 0; i < arr.length; i++) {
    curmax = Math.max(0, curmax + arr[i]);
    maxsum = Math.max(curmax, maxsum);
  }
  return maxsum;
}

// console.log(findMaxSubArray([-2, -1, -3, -4, -1, -2, -1, -5, -4])); // returns 0
// console.log(findMaxSubArray([])); // returns 0
console.log(findMaxSubArray([2, -3, 4, -1, -2, 1, 5, -3])); // returns 7

/*Solution with time complexity of O(n^2). Quadratic Algorithm.
Idea: The sum of A[i..j] can be efficiently calculated as (sum of A[i..j-1]) + A[j].*/

// function findMaxSubArray(arr) {
//   var max_so_far = Number.NEGATIVE_INFINITY;
//   var leftIndex = 0,
//       rightIndex = arr.length - 1,
//       len = arr.length;

//   for (var i = 0; i < len; i++) {
//     maxSum = 0;
//     for (var j = i; j < len; j++) {
//          maxSum += arr[j];
//         if (max_so_far < maxSum) {
//           leftIndex = i;
//           max_so_far = maxSum;
//           rightIndex = j;
//         }
//       }
//     }
//   }
//   return {
//     left: leftIndex,
//     right: rightIndex,
//     final_max_sum_subArray: max_so_far
//   };

// //var array = [1, - 2, 5, -3, -1, 3];
// var array = [2, -3, 4, -1, -2, 1, 5, -3];

// console.log(findMaxSubArray(array));



// console.log(findMaxSubArrayKadaneApproach([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 : [4, -1, 2, 1]

/* If the solution specifically requires, that if the list is made up of only negative numbers or an empty list is given, zero should be returned - then few more lines can be added to explicitly take care of that. */


                                                 