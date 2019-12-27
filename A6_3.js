// 3. Given two strings, the task is to find if a string('a') 
//can be obtained by rotating another string
//   ('b') by two places.

// Examples:
// Input: a = "amazon" b = "azonam" // rotated anti-clockwise
// Output: True
// Input: a = "amazon" b = "onamaz" // rotated clockwise
// Output: True
function isRotated(str1, str2)
{
  if (str1.length != str2.length)
      return false;
  var clockwiseRot = " ";
  var anticlockwiseRot = " ";
  var len = str2.length;
  var rotation = false
  // Initialize string as anti-clockwise rotation 
  anticlockwiseRot = anticlockwiseRot +
    str2.substr(len - 2, 2) +
    str2.substr(0, len - 2);
  
    // Initialize string as clock wise rotation
  clockwiseRot = clockwiseRot +
    str2.substr(2) +
    str2.substr(0, 2);

  // check if any of them is equal to string1 
   
  if (str1.localeCompare(clockwiseRot) ||
    str1.localeCompare(anticlockwiseRot))
  {
    rotation = true;
    return rotation;
  }
  else
    return rotation;

}
console.log(isRotated("amazon", "azonam"));//anit-clockwise

console.log(isRotated("amazon", "onamaz"));//clockwise

console.log(isRotated("amazon", "bcvbcvb"));//