// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

function getQueryParams(url) {
  const result = {};
  const queryString = url.split("?")[1];
  if (!queryString) return result;
  const pairs = queryString.split("&");
  for (let pair of pairs) {
    const [key, value] = pair.split("=");
    result[key] = value;
  }
  return result;
}

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
