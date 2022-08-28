function isPalindrome(word) {
  // Write your algorithm here
  const reversed = reverse(word)
  return reversed === word ? true : false
 
}
function reverse(str){
  return str.split('').reverse().join('')
}

/* 
  Add your pseudocode here
  1. Create a function that takes in a string and reverses it
  2. Declare a variable that stores the revered string
  3. Check if the returned string is equal to the provided string
  4. retrurn true if the strings are smilar and false if not
*/

/*
  Add written explanation of your solution here
  I amde use of a reverse functon that takes in any string, splits it, revereses and the joins. My isPalindrome function invokes the reverse function and tests if the reversed word is equl to the input
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
