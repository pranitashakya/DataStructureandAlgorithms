// 9. Given a array of Nstrings, find the longest common prefix among all strings present in the array.
// Input: apple ape April
// Output: ap


function longest_common_starting_substring(arr1)
{
  var arr = arr1.concat().sort();
  var a1 = arr[0];
  var a2 = arr[arr.length - 1];
  var L = a1.length;
  var i = 0;
  
  while (i < L && a1.toLowerCase().charAt(i) === a2.toLowerCase().charAt(i))
  {
      i++;
  }
  return a1.toLowerCase().substring(0, i);
}

console.log(longest_common_starting_substring(['apple', 'ape', 'April'])); 
console.log(longest_common_starting_substring(['geek', 'gee', 'ge']));