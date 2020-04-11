/*4. Given an array that contains numbers from 1 to n-1 and exactly 1 duplicate, 
find that duplicate.*/

function findDuplicate(arr)
{
  
  let start = 1;
  let end = arr.length - 1;
  let sumnodup = (start + end)*end/2;
  
  let sumgivenarr = arr.reduce(function (a, b)
  { return a + b }, 0);
  
  let duplicate = sumgivenarr - sumnodup;
  return duplicate;
}
console.log('Duplicate is', findDuplicate([1, 3, 2, 3, 4])); 
console.log('Duplicate is', findDuplicate([1, 2, 3, 4, 5, 5])); 