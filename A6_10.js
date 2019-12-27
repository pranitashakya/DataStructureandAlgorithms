//10. Design a URL shortner like bit.ly


function idToShortURL(n)
{
  
  var map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   var shorturl = [];

 
  while (n > 0)
  {
    
    shorturl.push(map[n % 62]);
  
    n = Math.floor(n / 62);
    
  }


   return shorturl.reverse().join("");
}


function shortURLtoID(shortURL) {
  var id = 0; 

  for (var i = 0; i < shortURL.length; i++) {
    if ("a" <= shortURL[i] && shortURL[i] <= "z")
      id = id * 62 + shortURL.charCodeAt(i) - "a".charCodeAt(0);
    if ("A" <= shortURL[i] && shortURL[i] <= "Z")
      id = id * 62 + shortURL.charCodeAt(i) - "A".charCodeAt(0) + 26;
    if ("0" <= shortURL[i] && shortURL[i] <= "9")
      id = id * 62 + shortURL.charCodeAt(i) - "0".charCodeAt(0) + 52;
  }
  return id;
}
console.log(idToShortURL(12345));
console.log(shortURLtoID(idToShortURL(12345)));
