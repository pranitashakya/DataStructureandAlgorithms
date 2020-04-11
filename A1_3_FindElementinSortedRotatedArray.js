/*3. Given a sorted array of n integers that has been rotated an 
unknown number of times, write code to find an element in the array.
You may assume that the array was originally sorted in increasing order.
*/

function findPivot(arr, start, end)
{
  if (arr == null || arr.length == 0)
    return -1;
  if (arr.length == 1 || arr[0] < arr[arr.length - 1])
    return 0;
    
  while (start <= end)
  {
    let mid = Math.floor((start + end) / 2);
    
    if (arr[mid] > arr[mid + 1]) {
     
      return mid + 1;
      
      
    }
    else if (arr[start] <= arr[mid]) {
      start = mid + 1;
     
    }
    else {
      end = mid - 1;
     
    }
  }
  return 0;
}

function findElement(arr,start, end, key)
{
  let pivot = findPivot(arr, start,end);
  
  let n = arr.length;
  if (arr[pivot] == key)
    return pivot;
  if (arr[start] <= key) {
   
  return binarySearch(arr, start, pivot - 1, key);
     }
  
  return binarySearch(arr, pivot + 1, end, key);
  
}

function binarySearch(arr, start, end, key)
{
  if (end < start)
    return -1;
  let mid = Math.floor((start + end) / 2);
 
  if (key == arr[mid])
    return mid;
  if (key > arr[mid]) {
    return binarySearch(arr, (mid + 1), end, key);
  }
   return binarySearch(arr, start, (mid - 1), key);
  
}
let arr = [6, 7, 8, 9, 10, 1, 2, 3];
///let arr = [73,85,94,21,27,34,47,54,66];
let start = 0;
let end = arr.length - 1;
let key = 3
console.log('Element found at index: ',findElement(arr,start, end, key)); 