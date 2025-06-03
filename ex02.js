// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

function arrayDifference(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element));
}

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]



// arrayDifference 함수는 첫 번째 배열에는 있는데, 두 번째 배열에는 없는 요소를 반환