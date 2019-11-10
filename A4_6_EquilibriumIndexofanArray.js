/*6. Write a function int equilibrium(int[] arr, int n); 
that given a sequence arr[] of size n, returns an
equilibrium index (if any) or -1 
if no equilibrium indexes exist*/

function equilibrium(arr, n) {
  for (i = 0; i < n; ++i) {
    var leftsum = 0;
    for (var j = 0; j < i; j++) {
      leftsum = leftsum + arr[j];
      rightsum = 0;
    }
    var rightsum = 0;
    for (var j = i + 1; j < n; j++) {
      rightsum = rightsum + arr[j];
    }
    if (leftsum == rightsum)
      return i;
    }
  return -1;
}
console.log(equilibrium([- 7, 1, 5, 2, -4, 3, 0], 7));
console.log(equilibrium([1,4], 0));