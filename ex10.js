// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(str) {
  let words;
  if (str.includes(" ")) {
    words = str.split(" ");
  } else if (str.includes("_")) {
    words = str.split("_");
  } else {
    words = [str];
  }
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join("");
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"