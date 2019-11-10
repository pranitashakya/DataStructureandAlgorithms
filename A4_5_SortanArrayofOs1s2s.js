/*
5.Write a program to sort an array of 0's,1's and 2's in 
ascending order.
If multiple cases present, consider first occurrence.
*/

function swapArray(arr, s, e) {
  var temp = arr[s];
  arr[s] = arr[e];
  arr[e] = temp;
}

function sortAscending(arr)
{
  var start = 0;
  var mid = 0;
  var end = arr.length - 1;
  // one pass through the array swapping
  // the necessary elements in place
  while (mid <= end)
  {
    if (arr[mid] === 0)
    {
      swapArray(arr, start++, mid++);
    }
    else if (arr[mid] === 1)
    {
      mid++;
       }
    else if (arr[mid] === 2)
    {
      swapArray(arr, mid, end--); 
    }
  }
  return arr;
}
console.log(sortAscending([2, 0, 0, 1, 2, 1])); 


