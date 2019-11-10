/*9. Given a 2D array, print it in spiral form.
See the following examples.
  Examples:
Input:
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
Output:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10*/


var matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9,10, 11, 12], [13, 14, 15, 16]];
var rowStart = 0;
var rowLength = matrix.length - 1;

var colStart = 0;
var colLength = matrix[0].length - 1;

while (rowStart <= rowLength && colStart <= colLength) {
  //1. Left to Right.
  //Move variable i from rowStart till colLength. 
  //(Print data from first row till last column. 1, 2, 3,4)
  for (var i = rowStart; i <= colLength; i++) {
    console.log(matrix[rowStart][i] + " ");
  }
  //2.Top to Bottom.
  //Move variable i from(rowStart + 1) till rowLength. 
  //(Print data in last column till//8,12,16)

    for (var j = rowStart + 1; j <= rowLength; j++) {
    console.log(matrix[j][colLength] + " ");
  }

  if (rowStart + 1 <= rowLength)
  {
    //3.Right to Left.
    //Move variable i from colLength - 1 till colStart. 
    //(Print data in last row)
    for (var k = colLength - 1; k >= colStart; k--)
    {
      console.log(matrix[rowLength][k] + " ");
    }
  }
  if (colStart + 1 <= colLength)
  {
    //4.Bottom to Up.
    //Move variable i from rowLength - 1 till rowStart. 
    //(Print data in first column)
    for (var k = rowLength - 1; k > rowStart; k--)
    {
      console.log(matrix[k][colStart] + " ");
    }
  }

  rowStart++;
  rowLength--;
  colStart++;
  colLength--;
}
 
// var row = currentRow = matrix.length,
//     column = currentColumn = matrix[0].length;

// while (currentRow > row / 2) {

//   // traverse row forward
//   for (var i = (column - currentColumn); i < currentColumn; i++) { console.log(matrix[row - currentRow][i]); }

//   // traverse column downward
//   for (var i = (row - currentRow + 1); i < currentRow; i++) { console.log(matrix[i][currentColumn - 1]) }

//   // traverse row backward
//   for (var i = currentColumn - 1; i > (column - currentColumn); i--) { console.log(matrix[currentRow - 1][i - 1]); }

//   // traverse column upward
//   for (var i = currentRow - 1; i > (row - currentRow + 1); i--) { console.log(matrix[i - 1][column - currentColumn]) }

//   currentRow--;
//   currentColumn--;
// }

// var input = [[1, 2, 3, 4],
//               [5, 6, 7, 8],
// [9, 10, 11, 12],
// [13, 14, 15, 16]];

// var spiralTraversal = function (matriks) {
//   var result = [];
//   var goAround = function (matrix) {
//     if (matrix.length == 0) {
//       return;
//     }

//     // right
//     result = result.concat(matrix.shift());

//     // down
//     for (var j = 1; j < matrix.length - 1; j++) {
//       result.push(matrix[j].pop());
//     }

//     // bottom
//     result = result.concat(matrix.pop().reverse());

//     // up
//     for (var k = matrix.length - 2; k > 0; k--) {
//       result.push(matrix[k].shift());
//     }

//     return goAround(matrix);
//   };

//   goAround(matriks);

//   return result;
// };
// var result = spiralTraversal(input);

// console.log('result', result);


