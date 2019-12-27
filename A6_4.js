//4. Given an string in roman number format, 
//your task is to convert it to integer.

function toRoman(inputNum) {
  var romanized = '';
  //creates an empty string  romanized
  var intgr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  
  for (var i = 0; i < intgr.length; i++) {
    //this loops through the integer array
    while (intgr[i] <= inputNum)
    {
      //do something as soon as the indexed number for the integer
      //array is less than the input number
      romanized += roman[i];
      
      //push the roman numeral with the same index value as the 
      //integer to the romanized string
      inputNum -= intgr[i];
      
      //reduce the input number by the matching integer index number
    }
  }
  return romanized;
}

console.log(toRoman(66));
