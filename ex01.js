// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(str) {
  const words = str.split(" ");
  const capitalizeWords = words.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  });
  return capitalizeWords.join(" ");
};

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
