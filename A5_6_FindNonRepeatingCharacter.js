/*6.Given an input stream of n characters consisting only of 
small case alphabets the task is to find
the first non repeating character each time a character is inserted 
to the stream. If no non
repeating element is found print -1.*/
//method1: using loops
function FirstNotRepeatedChar(str) {
  var arr = str.split("");
  var result = "";
  var ctr = 0;
  for (var x = 0; x < arr.length; x++) {
    ctr = 0;
    for (var y = 0; y < arr.length; y++) {
      if (arr[x] === arr[y]) {
        ctr += 1;
      }
    }

    if (ctr < 2) {
      result = arr[x];
      break;
    }
  }
  return result;
}
console.log(FirstNotRepeatedChar("fabar"));
console.log("--------------------------------------------");

//Method 2: using map

function FirstNotRepeatingChar(inString) {
  var countFreq = new Map();
  var inArray = inString.split("");

  inArray.forEach(ch => {
    if (!countFreq[ch]) countFreq[ch] = 1;
    else countFreq[ch]++;
  });

  // Observe this array. It's kinda Map only.
  console.log(countFreq);

  for (let i = 0; i < inArray.length - 1; i++) {
    let ch = inArray[i];
    if (countFreq[ch] == 1) return ch;
  }
  //return 'No Repeating Characters Found';
  return -1;
}

console.log(FirstNotRepeatingChar("fobar")); // f
console.log(FirstNotRepeatingChar("aabbccdef")); // d
console.log(FirstNotRepeatingChar("aabbcc")); // 'No Unique Character Found'
