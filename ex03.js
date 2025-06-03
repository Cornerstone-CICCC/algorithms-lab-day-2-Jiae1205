// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(arr) {
  const n = arr.length + 1;
  const totalSum = n * (n + 1) / 2;
  const arrSum = arr.reduce((acc, cur) => acc + cur, 0);
  return totalSum - arrSum;
};

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3



// reduce()란? 배열의 모든 요소를 하나씩 누적해서 하나의 결과값으로 줄이는 함수
// 기본 문법
// array.reduce(function(accumulator, currentValue, currentIndex, array) {
// 
// }, initialValue); 반환값이 다음 호출에서 accumulator로 전달됨
// accumulator: 지금까지 누적된 값 (처음에는 initialValue)
// currentValue: 현재 배열 요소 값
// initialValue: 누적 시작 값 (없으면 배열 첫 번째 요소가 됨)