/* 3.Given a sorted array of n integers 
that has been rotated an unknown number of times, 
write code to find an element in the array. You may assume 
that the array was originally sorted in increasing order.*/
//http://www.studyalgorithms.com/array/find-an-element-in-a-sorted-array-rotated-unknown-times/

//https://www.ideserve.co.in/learn/find-pivot-in-a-sorted-rotated-array

function findPivotLinear(arr)
{
   let pivot = -1;
  if (arr != null && arr.length > 0)
  {
    	            pivot = 0;
   	            for (let i = 0; i < arr.length - 1; i++) {
                    if (arr[i] > arr[i + 1])
                    {
        	           pivot = i + 1;
       	              break;
        
      }
      
    }
    
  }
  	        return pivot;
  
}

function findPivotBinarySearchTest(arr)
{

  if (arr == null || arr.length == 0) {
    return -1;
  }

  // Case when array is not rotated. Then first index is the pivot
  if (arr.length == 1 || arr[0] < arr[arr.length - 1]) {
    return 0;
  }

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {

    let mid = (start + end) / 2;
    // check if mid+1 is pivot
    if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
      return (mid + 1);
    } else if (arr[start] <= arr[mid]) {
      // If array[start] <= array[mid],
      // it means from start to mid, all elements are in sorted order,
      // so pivot will be in second half
      start = mid + 1;
    } else {
      // else pivot lies in first half, so we find the pivot in first half
      end = mid - 1;
    }
  }

  return 0;
}
let arr = [ 5, 4];
findPivotBinarySearchTest(arr);
console.log(findPivotLinear(arr));
