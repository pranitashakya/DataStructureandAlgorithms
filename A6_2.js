// 2. Given a string, recursively remove adjacent duplicate characters 
//from string.The output string should not have any adjacent duplicates.
//See following examples.
//   Input: azxxzy
//    Output: ay
// First "azxxzy" is reduced to "azzy".
//The string "azzy" contains duplicates, so it is further reduced
// to "ay".
//   Input: caaabbbaacdddd
// Output: Empty String
// Input: acaaabbbacdddd
// Output: acac


const removeAdjDups = function (str, last_removed) {
  // If length of string is 1 or 0
  if (str.length == 0 || str.length == 1)
  {
   
    return str;
  }
  
  
  if (str.charAt(0) == str.charAt(1))
  {
    last_removed = str.charAt(0);
    
    
    while (str.length > 1 && str.charAt(0) == str.charAt(1))
    {
      str = str.substring(1, str.length);
      
    }
    str = str.substring(1, str.length);
   
    return removeAdjDups(str, last_removed);
  }
  

  let rem_str = removeAdjDups(str.substring(1, str.length), last_removed);
 
  if (rem_str.length != 0 && rem_str.charAt(0) == str.charAt(0))
  {
    last_removed = str.charAt(0);
   
    return rem_str.substring(1, rem_str.length);
    
  }


  if (rem_str.length == 0 && last_removed == str.charAt(0))
    return rem_str;

  return (str.charAt(0) + rem_str);
}
console.log(removeAdjDups('acaaabbbacdddd')); //acac
console.log(removeAdjDups('caaabbbaacdddd')); //empty
console.log(removeAdjDups('azxxzy')); //ay


