// /*10. Print the elements of an array in the decreasing frequency if 2 numbers have same frequency
// then print the one which came first.
//   Examples:
// Input: arr[] = { 2, 5, 2, 8, 5, 6, 8, 8}
// Output: arr[] = { 8, 8, 8, 2, 2, 5, 5, 6}*/


function sortByFrequency(arr) {
  var frequency = {}, value;
  var finalarr = [];
  var sortedUniques;

  // compute frequencies of each value
  for (var i = 0; i < arr.length; i++)
  {
    value = arr[i];
    if (value in frequency)
    {
      frequency[value]++;
    } else {
      frequency[value] = 1;
    }
  }

  // make array from the frequency object to de-duplicate
  var uniques = [];
  for (value in frequency) {
    uniques.push(value);
    //2,5,6,8
  }

  // sort the uniques array in descending order by frequency
  function compareFrequency(a, b)
  {
    return frequency[b] - frequency[a];
  }
  sortedUniques = uniques.sort(compareFrequency);
  //8,2,5,6
 
  // Place the elements in to the array based on frequency
  for (j = 0; j < sortedUniques.length; j++)
  {
    for (k = 0; k < frequency[sortedUniques[j]]; k++)
    {
      finalarr.push(sortedUniques[j]);
     
    }
  }
  return finalarr;
}

console.log(sortByFrequency([2, 5, 2, 8, 5, 6, 8, 8]));




// int a[] = { 0, 0, 0, 1, 3, 3, 2, 1, 3, 5, 6, 0};
// int b = a.length;
// for (int i = 0; i < b; i++) {
//   for (int j = 0; j < i; j++) {
//     int temp;
//     if (a[j] > a[i]) {
//       temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//     }
//   }
// }

// for (int r = 0; r < a.length; r++) {
//   System.out.println(a[r]);
// }




