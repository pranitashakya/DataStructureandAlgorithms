// // 5. Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
// // Input : X = "abcdxyz", y = "xyzabcd"
// // Output : 4
// // The longest common substring is "abcd" and is oflength 4.
// // Input : X = "zxabcdezy", y = "yzabcdezx"
// // Output : 6
// // The longest common substring is "abcdez" and is of length 6.




var findLongestCommonSubstring = function (string1, string2)
{
  var comparsions = []; //2D array for the char comparsions ...
  var maxSubStrLength = 0;
  var lastMaxSubStrIndex = -1,
    i,
    j,
    char1,
    char2,
    startIndex;

  for (i = 0; i < string1.length; ++i)
  {
    comparsions[i] = new Array();

    for (j = 0; j < string2.length; ++j)
    {
      char1 = string1.charAt(i);
      char2 = string2.charAt(j);

      if (char1 === char2)
      {
        if (i > 0 && j > 0)
        {
          comparsions[i][j] = comparsions[i - 1][j - 1] + 1;
        }
        else
        {
          comparsions[i][j] = 1;//one match
        }
      }
      else
      {
        comparsions[i][j] = 0;//no match
      }

      if (comparsions[i][j] > maxSubStrLength)
      {
        maxSubStrLength = comparsions[i][j];
        lastMaxSubStrIndex = i;
      }
    }
  }

  if (maxSubStrLength > 0)
  {
    startIndex = lastMaxSubStrIndex - maxSubStrLength + 1;
    string1.substr(startIndex, maxSubStrLength);

    //return maxSubStrLength
    return string1.substr(startIndex, maxSubStrLength);
  }

  return null;
};

// Test code
//console.log(findLongestCommonSubstring("ababccd", "abccx"));
//console.log(findLongestCommonSubstring("ababccd", "ccxaba"));
//console.log(findLongestCommonSubstring("ababccd", "zzzz"));
console.log(findLongestCommonSubstring("CLCL", "LCLC"))
