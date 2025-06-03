// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(str) {
  const counts = {};
  let maxCount = 0;
  let maxChar = '';
  for (const char of str) {
    counts[char] = (counts[char] || 0) + 1;
    if (counts[char] > maxCount) {
      maxCount = counts[char];
      maxChar = char;
    }
  }
  return maxChar
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"