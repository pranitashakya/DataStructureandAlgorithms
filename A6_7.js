//7. Your task is to implement the function atoi. 
//The function takes a string(str) as argument and
//converts it to an integer and returns it.



function atoi(str)
{

  const zeroCode = '0'.charCodeAt(0);
  console.log('zeroCode',zeroCode);

 // Initialize sign as positive
  let sign = 1;

  // If number is negative, then update sign 
  if (str[0] === '-')
  {
    str = str.substring(1);
    sign = -1;
  }

  let acc = 0;
  
  for (const char of str)
  {
    acc = acc * 10 + (char.charCodeAt(0) - zeroCode);
    console.log('zeroCode', zeroCode)
    console.log('char.charCodeAt(0)', char.charCodeAt(0));
    console.log('acc',acc);
  }

  return sign * acc;
}

console.log(atoi('123')); // 123
//console.log(atoi('-123')); // -123





