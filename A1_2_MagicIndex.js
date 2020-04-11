/*2.A magic index in an array A[0…n-1] is defined to be an 
 index such that A[i] = i.Given a sorted array of distinct 
 integers,write a method to find a magic index if one
 exists, in an array A. 
 FOLLOW UP: What if the values are not distinct?*/


function magicIndex(arr,start,end)
{
   if (start <= end)
  {
    let mid = (start + end) / 2;
    // check for magic index.
    if (mid === arr[mid]) 
      return mid;
    // If mid>A[mid] means fixed point might be on
    if (mid > arr[mid])  
    // the right half of the array
        return magicIndex(arr, (mid + 1), end);
    else
      // If mid<A[mid] means fixed point might be on
      // the left half of the array
        return magicIndex(arr, start, (mid - 1));
      
  }// Return -1 if there is no Fixed Point 
    return -1;
  }
//let arr = [-1,0,1,2,4,10,11];
 //let start = 0;
//console.log('The magic index isssss ', magicIndex(arr, start, arr.length - 1));




function magicNonDistinct(arr, start, end) {
  if (end < start)
    return -1;
 
  let mid = Math.floor((start + end) / 2);

  if (mid < 0 || mid >= arr.length)
    return -1;
  
  let midValue = arr[mid];
 

  // Magic Index Found, return it. 
  if (midValue === mid)
  {
   
    return mid;
}

    // Search on Left side 
  let leftEnd = Math.min(midValue, mid - 1);

  let leftRes = magicNonDistinct(arr, start, leftEnd);
 
  // If Found on left side, return. 
  if (leftRes >= 0)
    return leftRes;

  let rightStart = Math.max(midValue, mid + 1);
  
  let rightRes = magicNonDistinct(arr, rightStart, end);
 
  return rightRes;
}

let arr = [ -10, -5, 2, 2, 2, 3, 4, 7,9, 12, 13];

console.log('The magic index is ',magicNonDistinct(arr, 0, arr.length - 1));



