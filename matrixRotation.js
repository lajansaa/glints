const inputData = "5 4 7\n1 2 3 4\n7 8 9 10\n13 14 15 16\n19 20 21 22\n25 26 27 28";

function rotateMatrix(matrixArr, rows, cols) {
  let top = 0;
  let bottom = rows;
  let left = 0;
  let right = cols;
  while (top < bottom && left < right) {
    // matrixArr is 0 indexed
    // last value is n - 1
    bottom--;
    right--;

    // element of first row first col
    // to replace value of second row first col
    let prev = matrixArr[top][left+1];

    // move left col elements down
    for (let i = top; i < bottom; i++) {
      const curr = matrixArr[i][left];
      matrixArr[i][left] = prev;
      prev = curr;
    }

    // move bottom row elements right
    for (let i = left; i < right; i++) {
      const curr = matrixArr[bottom][i];
      matrixArr[bottom][i] = prev
      prev = curr;
    }
    
    // move right col elements up
    for (let i = bottom; i > top; i--) {
      const curr = matrixArr[i][right];
      matrixArr[i][right] = prev
      prev = curr;
    }

    // move top row elements left
    for (let i = right; i > left; i--) {
      const curr = matrixArr[top][i];
      matrixArr[top][i] = prev
      prev = curr;
    }

    // proceed to inner matrix if any
    top++;
    left++;
  } 
  return matrixArr;
}

function process(input) {
  const inputArr = input.split("\n");
  let metadata;
  let matrixArr = [];
  let finalMatrixStr = '';

  inputArr.forEach((e, i) => {
    if (i == 0) {
      return metadata = inputArr[0].split(" ");
    }
    matrixArr.push(e.split(" "));
  })
  const rows = metadata[0];
  const cols = metadata[1];
  const rotations = metadata[2];

  for (let i = 0; i < rotations; i++) {
    matrixArr = rotateMatrix(matrixArr, rows, cols);
  }

  matrixArr.forEach((row) => {
    finalMatrixStr += row.join(" ") + "\n";
  })

  return finalMatrixStr.trim();
}

console.log(process(inputData));
