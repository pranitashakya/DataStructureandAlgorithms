/*1. Find the element that appears once in a sorted array where all 
other elements appear twice one after another. 
Find that element in 0(logn) complexity.
Input:   arr[] = {1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8}
Output:  4 */

//Using Binary Search
function elementAppearOnce(arr)
{
  let start = 0;
  let end = arr.length - 1;
  //base cases
  if (start == end) {
    
    return arr[start];
  }

 //Run a loop while start is less than end
  while (start < end)
  {
     let mid = Math.floor((start + end) / 2);
     //If mid is 0
    if (mid % 2 === 0) {
     
      
      if (arr[mid] === arr[mid + 1]) {
        start = mid + 2;
        
      }
      else {
        end = mid;
               
      }
    }
    else {
      
      if (arr[mid] === arr[mid - 1]) {
        start = mid + 1;
      
      }
      else {
        end = mid;
          }
    } 
    
  }
  return arr[start];
  
      }
let arr = [1, 1, 3, 3, 4, 5, 5, 7, 7, 8, 8];
console.log('The element is',elementAppearOnce(arr));









  
