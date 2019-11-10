/*8. Given an array and a number k where k is smaller 
than size of array, we need to find the k’th
smallest element in the given array.

It is given that all array elements are distinct.*/

//for e.g; arr = [7, 10, 4, 3, 20, 15]

//Using Javascript simple sorting implementation
function kthSmallest(arr, k)
{
  // Sort the given array 
  newArr = arr.sort(function (a, b)
  {
    return a - b;
  });
  return (newArr[k - 1]);
}

console.log(kthSmallest([7, 10, 4, 3, 20, 15], 3));
console.log(kthSmallest([7, 10, 4, 3, 20, 15], 4));







// function findKthLargest(nums, k) {
//   if (k < 1 || nums == null) {
//     return 0;
//   }
//   return getKth(nums.length - k + 1, nums, 0, nums.length - 1);
// }

// function getKth(k, nums, start, end) {

//   var pivot = nums[end];

//   var left = start;
//   var right = end;

//   while (true) {

//     while (nums[left] < pivot && left < right) {
//       left++;
//     }

//     while (nums[right] >= pivot && right > left) {
//       right--;
//     }

//     if (left == right) {
//       break;
//     }

//     swap(nums, left, right);
//   }

//   swap(nums, left, end);

//   if (k == left + 1) {
//     return pivot;
//   } else if (k < left + 1) {
//     return getKth(k, nums, start, left - 1);
//   } else {
//     return getKth(k, nums, left + 1, end);
//   }
// }

// function swap(nums, n1, n2) {
//   var tmp = nums[n1];
//   nums[n1] = nums[n2];
//   nums[n2] = tmp;
// }

//console.log(findKthLargest([7,10,4,3,20,15], 3));




// function kthSmallest(arr, k)
// {
//   var minH = new MinHeap();
//   for (var i = 0; i < arr.length; i++) {
//     minH.add(array[i]);
//   }
//   for (var i; i < k; i++) {
//     minH.poll();
//   }
//   return minH.poll();
// }
// console.log(kthSmallest([12, 3, 13, 4, 2, 40, 23], 2));
  
 
