

function longestPalindromicSubstring(str)
{
    var stringlen = str.length;
    var start = 0; //index where the longest palindrome begins
    var maxlength = 1;//length of the longest palindrome
    var palindrome = []; //boolean table to store palindrome truth

    //Trivial case: single letter palindromes
  for (var i = 0; i < stringlen; i++) {
      palindrome[i] = [];
      palindrome[i][i] = true;
    }

    //Finding palindromes of two characters.
  for (var i = 0; i < stringlen - 1; i++) {
      if (str.charAt(i) == str.charAt(i + 1)) {
        palindrome[i][i + 1] = true;
        start = i;
        maxlength = 2;
      }
    }

    //Finding palindromes of length 3 to n and saving the longest
  for (var curr_len = 3; curr_len <= stringlen - 1; curr_len++) {
    for (var i = 0; i < stringlen - curr_len + 1; i++) {
        var j = i + curr_len - 1;
        if (str.charAt(i) == str.charAt(j) //1. The first and last characters should match 
          && palindrome[i + 1][j - 1]) //2. Rest of the substring should be a palindrome
        {
          palindrome[i][j] = true;
          start = i;
          maxlength = curr_len;
        }
      }
  }
  
  return str.substring(start, maxlength + 1);
}


  console.log(longestPalindromicSubstring('banana'));
