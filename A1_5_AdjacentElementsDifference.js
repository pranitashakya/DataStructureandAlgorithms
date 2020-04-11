/*5. Search an element in an array where difference 
between adjacent elements is 1.
For example: arr[] = { 8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3}

Search for 3 and Output: Found at index 7*/


function findValue(arr, val)
{
  let i = 0;
  while (i <= arr.length - 1)
  {
    // If x is found at index i
    if (arr[i] === val)
      return i;
   
    // Jump the difference between current
    // array element and x
    let diff = Math.abs(arr[i] - val);
   
    i = i + diff;
    
  }
  
  return -1;
}
let arr = [8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 3]

console.log("Index is", findValue(arr, 3));
