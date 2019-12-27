//8. Your task is to implement the function strstr. 
//The function takes two strings as arguments(s, x)
//and locates the occurrence of the string x in the string s. 
//The function returns and integer denoting the first occurrence of the string x .



var strStr = function (s, x)
{
  if (s.length < 1 && x.length < 1)
  {
    return 0;
  }
  if (s.length < 1)
  {
    return -1;
  }

  if (s.length < 1)
  {
    return 0;
  }
  let nIndex = 0;
  for (let i = 0; i < s.length; i++)
  {

    if (s[i] === x[nIndex])

    {
      if (nIndex === (x.length - 1))
      {
          return (i - nIndex);

      }
      else
      {
        nIndex++;
        
      }
    }
    else if (nIndex > 0)
    {
      i = i - nIndex;
      nIndex = 0;
     
    }
  }
  return -1;
};

console.log(strStr('geekgeekgeek', 'sasas')) //nomatch
console.log(strStr('geekgeekgeek', 'geek'))
console.log(strStr('geekgeekgeek', 'kge'))