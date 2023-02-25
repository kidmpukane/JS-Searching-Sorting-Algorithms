let myNumArray = [3, 0, 2, 5, -1, 4, 1];
let myNumArray2 = [
  2, 6, 5, 12, -1, 3, 8, 7, 1, -4, 0, 23, 1, -55, 20, 37, 54, 210, -23, 7, 483,
  9339, 29, -3, 90, -2, 81, 54, 7372, -92, 93, 93, 18, -43, 21,
];

const insertionSort = (inputArray) => {
  for (let i = 1; i < inputArray.length; i++) {
    let j = i - 1;
    let tempVar = inputArray[i];
    while (j >= 0 && inputArray[j] > tempVar) {
      inputArray[j + 1] = inputArray[j];
      j--;
    }
    inputArray[j + 1] = tempVar;
  }
  return inputArray;
};
console.log(insertionSort(myNumArray));
console.log(insertionSort(myNumArray2));
