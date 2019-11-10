/*3. Given an unsorted array of nonnegative integers, 
find a contiguous subarray which adds to a given number.
Find subarray with given sum
Examples :
Input: arr[] = {1, 4, 20,3, 10, 5}, sum = 33
Output: Sum found between indexes 2 and 4*/

function findSubArraywithGivenSum(arr, sum) {

  if (arr.length === 0 || arr === null ) {
    console.log("List is empty");
    return;
  }
  var cursum = 0, start = 0;
    
    for (var i = 0; i <= arr.length; i++) {
    while (cursum > sum) {
      cursum = cursum - arr[start];
      start++;
    }
    if (cursum === sum) {
      console.log("Sum is between indexes "
        + start + " & " + (i - 1));
      cursum -= arr[start];
      start++;
    }
    if (i < arr.length)
    {
      cursum = cursum + arr[i];
    }
  }
}
//findSubArraywithGivenSum([1, 4, 20, 3, 10, 5], 33)
//findSubArraywithGivenSum([1,4,0,0,3,10,5], 7)
findSubArraywithGivenSum([1,4], 0)
