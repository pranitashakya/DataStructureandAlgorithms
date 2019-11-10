/*4. Given an unsorted array of integers, find a subarray which 
adds to a given number.If there are more than one subarrays 
with sum as the given number, print any of them.
Examples:
Input: arr[] = { 1, 4, 20, 3, 10, 5}, sum = 33
Ouptut: Sum found between indexes 2 and 4*/

function findSubArraywithGivenSum(arr, sum)
{
  var start = 0;
  var end = -1;
  var curSum = 0;
 //create map to keep track of the elements
  var sumMap = new Map();

  for (var i = 0; i < arr.length; i++)
  {
    //add current element to cursum
    curSum += arr[i];

    if ((curSum - sum) == 0)
    {
      //check whether cur_sum - sum = 0, if 0 it means  
      //the sub array is starting from index 0- so stop 
      start = 0;
      end = i;
      break;
    }
  
    //if hashMap already has the value, means we already   
    // have subarray with the sum - so stop  
    if (sumMap.has(curSum - sum))
    {
      start = start + sumMap.get(curSum - sum);
      console.log(start);
      end = i;
      break;
      
   }
     //if value is not present then add to hashmap 
    sumMap.set(sum, i);
  }
  if (end === -1)
  {
    console.log("Subarrary Not Found");
  }
  else
  {
    console.log("Subarray from index " + start + " to " + end);
  }
  return
}

findSubArraywithGivenSum([3, 4, -7, 1, 3, 3, 1, -4], 7)
findSubArraywithGivenSum([10, 2, -2, -20, 10], -10)
findSubArraywithGivenSum([-10, 0, 2, -2, -20, 10], -20)
//this could have been better
findSubArraywithGivenSum([-10, 0, 2, -2, -20, 10], 20)
findSubArraywithGivenSum([1, 4, 20, 3, 0, 5], 33)



//this approach works for -ve number but need to throughly verify
//   if (arr.length === 0 || arr === null)
//   {
//     console.log("List is empty");
//     return;
//   }
//   var cursum = 0, start = 0, i;
//   var found = false;
  
//   for (i = 0; i <= arr.length; i++)
//   {
//     while (cursum > sum && start < i)
//     {
//       cursum = cursum - arr[start];
//       start++;
//     }
//     //console.log(cursum);
//    // console.log(sum);
//     if (cursum == sum) {
//       console.log("Sum found between index "
//         + start + " to " + (i - 1));
//       cursum -= arr[start];
//       start++;
//       found = true;
//     }

//     // Add this element to cursum
//     if (i < arr.length) {
//       cursum = cursum + arr[i];
//     }
//   }
//   if (found === false)
//     console.log('No subarray with given sum exists');
// }

//findSubArraywithGivenSum([1 ,4 ,20 ,3 ,0 ,5], 33)
//findSubArraywithGivenSum([3, 5, 6, 9, 14, 8, 2, 12, 7, 7], 14)






