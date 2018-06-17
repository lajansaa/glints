const inputData = 25;

function factorial(n) {
  // exception handling
  if (n < 0 || typeof n != "number" || isNaN(n)) return "n must be a positive integer";
  // base case
  if (n == 1 || n == 0) return 1;
  // recursion
  return n * factorial(n-1);
}

console.log(factorial(inputData));
