//6. Given a string, find length of the longest substring with all 
//distinct characters.
//For example, for input "abca", the output is 3
//as "abc" is the longest substring with all distinct characters.






function lengthOfLongestSubstring(str)
{
  if (str.length == 0 || null)
  {
    return 0;
    }

  var letters = str.split("");
  var max = 0;
  var result = new Map();
  var start = 0;

  for (var i = 0; i < letters.length; i++)
  {
    if (!result.has(letters[i]))
    {
      result.set(letters[i], i);
      
    }
    else
    {
      i = result.get(letters[i]);
      
      result.clear();
    }
     if (max < result.size)
    {
      max = result.size;
    }
  }
  return max;
}

console.log(lengthOfLongestSubstring("abca"));
