const inputData = "6\n1 5 4 3 2 6";

function sorting(arr) {
  let prev = arr[0];
  let running = true;
  let firstElem = null;
  let firstElemIndex = null;
  let i = 1;
  let elementToSwapCount = 0;
  let operationCount = 0;
  let results = "";
  
  while (running && i <= arr.length ) {
    let curr;
    if (i == arr.length) {
      curr = Infinity;
    } else {
      curr = parseInt(arr[i]);
    }

    // only single operation is allowed
    if (operationCount > 1) {
      results = "no";
      running = false;
    }

    // possibility of a reverse sub-segment
    if (curr < prev && firstElem != null) {
      elementToSwapCount++;
    }

    // first occurrence of unsorted numbers
    if (curr < prev && firstElem == null) {
      firstElem = prev;
      firstElemIndex = i - 1;
    }

    // detecting end of sub-segment
    if (curr > prev && firstElem != null && firstElem < curr) {
      // if sub-segment only involves a pair of numbers
      // then it's a swap
      if (operationCount == 0 && elementToSwapCount == 0) {
        results = "yes\nswap " + (firstElemIndex + 1) + " " + i;
      }

      // if sub-segment involves more than a pair of numbers
      // then it's a reverse
      if (operationCount == 0 && elementToSwapCount > 0) {
        results = "yes\nreverse " + (firstElemIndex + 1) + " " + i;
      }

      // signify that a swap/reverse has occurred
      operationCount++;

      // reset to see if further operations are necessary
      firstElem = null;
      firstElemIndex = null;
      elementToSwapCount = 0;
    }

    // if element after end of sub-segment is bigger than first element
    // reverse does not work
    if (curr > prev && firstElem != null && firstElem > curr) {
      results = "no"
      running = false;
    }

    prev = curr;
    i++;
  }

  // if another operation occurred just before the end of the loop
  if (operationCount > 1) results = "no";
  // blank results means sorted array
  if (results == "") results = "yes";

  return results;
}

function process(input) {
  const inputArr = input.split("\n");
  let arrLength, arr;
  inputArr.forEach((e, i) => {
    if (i == 0) return arrLength = e;
    return arr = e.split(" ");
  })
  return sorting(arr);
}

console.log(process(inputData));
