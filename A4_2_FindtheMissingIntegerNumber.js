/*Given a list of n - 1 integers and 
these integers are in the range of 1 to n.
There are no duplicates in the list.
One of the integers is missing in the list.
Write an efficient code to find the missing integer.*/

//Method 1:
function findMissingNumberusingSum(arr, n)
// where arr= input array, num = length of the array
{
  if (arr.length === 0 || arr === null) {
    console.log("List is empty");
    return;
  }
  //sum of total natural number (num + 1)
  var sum = (n + 1) * (n + 2) / 2;
  for (var i = 0; i < n; i++)
     {
    sum = sum - arr[i];
     }
  return sum;
}
console.log("Method 1 using sum formula:")
console.log(findMissingNumberusingSum([1, 2, 3, 5], 4));

//Method 2:
function findMissingNumberSorted(arr,n) 
{
  if (arr.length === 0 || arr === null) {
    console.log("List is empty");
    return;
  }

  var sum = 0;
  for (var i = 1; i < n; i++)
  {
    sum = i - arr[i - 1];
     if (sum < 0) {
      return i;
    }
   }
}
console.log("Method 2 assuming it is sorted array:")
console.log(findMissingNumberSorted([1, 2, 3, 5], 5));


//Method:3
// function findMissingNumberUnSorted(arr,num) 
// {
//   var total = 0;
//   for (var cnt = 1; cnt < num; cnt++)
//   { 
//     total = total + cnt - arr[cnt - 1];
//     console.log(total);
//   }
//   return (total + num);
// }
// console.log(findMissingNumberUnSorted([1,2,4,6,3,7,8], 7));
// when unsorted this method doesn't work either
//console.log(findMissingNumberUnSorted([6, 8, 3, 4, 1, 2],7));

