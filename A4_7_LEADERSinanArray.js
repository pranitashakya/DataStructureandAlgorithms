/*7. Write a program to print all the LEADERS in the array.
An element is leader if it is greater than all
the elements to its right side.
And the rightmost element is always a leader.
For example int the array { 16, 17, 4, 3, 5, 2 }, leaders 
are 17, 5 and 2.*/

//Method1:
function findLeader(arr)
{
  if (arr.length === 0 || arr === null)
  {
    console.log("List is empty or null");
    return;
  }
  for (var i = 0; i < arr.length; i++)
  {
    var leader = true;
    for (var j = i + 1; j < arr.length; j++)
    {
      if (arr[i] <= arr[j]) {
        leader = false;
        break;
      }
    }
    if (leader)
    {
      console.log(arr[i]);
    }
  }
}
console.log("Method1 Output:")
findLeader([16, 17, 4, 3, 5, 2]);

//Method2:
function findLeaderM(arr) {
  if (arr.length === 0 || arr === null) {
    console.log("List is empty or null");
    return;
  }
  var n = arr.length;
  var max = arr[n - 1];
  console.log(max);
  for (var i = n - 2; i >= 0; i--) {
    if (max < arr[i]) {
      max = arr[i];
      console.log(arr[i]);
    }

  }
}
console.log("Method2 Output:")
findLeaderM([16, 17, 4, 3, 5, 2]);