// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(str) {
  let count = 0;
  const vowels = "aeiou";
  str = str.toLowerCase();
  for (let char of str) {
    if (char >= 'a' && char <= 'z' && !vowels.includes(char)) {
      count++;
    }
  }
  return count;
};

console.log(countConsonants("hello world")); // Expected output: 7