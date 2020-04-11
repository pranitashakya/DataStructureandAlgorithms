/*
6.Given an array of numbers, 
split the array into two where one array contains the sum of n-1 numbers 
and the other array with all the n-1 elements.

 */


function splitArray(arr){
  // bases cases
  if (arr.length === 0 || arr.length === 1)
    return false;
  let total = 0;

  for (let i in arr)
  {
    total = total + arr[i];
     }
  
  let target = total/2;
 

  for (let i in arr)
  {
    if (arr[i] === target)
    {

      let arr2 = arr.splice(i, 1)
     
      return ([arr, arr2])
    }
  }
  return false;
}
console.log(splitArray([1, 3, 16, 5, 7]));