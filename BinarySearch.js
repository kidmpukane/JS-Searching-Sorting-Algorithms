//Recursive Approach
const binary_Search = (
  myArray,
  searchValue,
  firstIndexValue = 0,
  lastIndexValue = myArray.length - 1
) => {
  // base case
  if (lastIndexValue < firstIndexValue || myArray.length === 0) return -1;
  const middleIndexValue =
    firstIndexValue + Math.floor((lastIndexValue - firstIndexValue) / 2);
  // If the element is present at the middle
  if (myArray[middleIndexValue] === searchValue) {
    return middleIndexValue;
  }
  // If element is smaller than mid, then
  // it can only be present in left subarray
  if (myArray[middleIndexValue] > searchValue) {
    return binary_Search(
      myArray,
      searchValue,
      firstIndexValue,
      middleIndexValue - 1
    );
  }
  // Else the element can only be present in right subarray
  return binary_Search(
    myArray,
    searchValue,
    middleIndexValue + 1,
    lastIndexValue
  );
};
const myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(binary_Search(myArray, 10));

//Iterative Approach
function iterativeBinarySearch(myNumArray, value) {
  myNumArray = [1, 3, 5, 7, 8, 9];
  value = 9;

  let firstIndexValue = 0;
  let lastIndexValue = myNumArray.length - 1;

  while (firstIndexValue <= lastIndexValue) {
    let middleIndexValue = Math.floor((firstIndexValue + lastIndexValue) / 2);

    if (myNumArray[middleIndexValue] === value) {
      console.log(`Found your value ${value} in the middle!`);
      return true;
    } else if (myNumArray[middleIndexValue] < value) {
      firstIndexValue = middleIndexValue + 1;
      console.log(
        `${value} is greater than the middle value ${middleIndexValue}, searching the right side of the array...`
      );
    } else {
      lastIndexValue = middleIndexValue - 1;
      console.log(
        `${value} is smaller than the middle value ${middleIndexValue}, searhing the left side of the array...`
      );
    }
  }
  console.log(`Couldn't find ${value} in the array`);
  return false;
}

iterativeBinarySearch();
