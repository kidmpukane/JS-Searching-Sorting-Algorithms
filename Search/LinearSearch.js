//Iterative Approach

function findValue() {
  let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let value = 12;
  let results = [];

  for (let i = 0; i < myList.length; i++) {
    if (myList[i] == value) {
      results.push(myList[i]);
      console.log(results);
    }
  }
  if (results.length === 0) {
    console.log("Can not find the value in the array.");
  }
}

findValue();

//.find( ) Approach

const findValue2 = () => {
  let myArray = [1, 2, 3, 4, 5, 6];
  let foundValue = myArray.find((e) => e === 12);
  console.log(foundValue);
  if (foundValue === undefined) {
    console.log("Can not find the value in the array.");
  }
};

findValue2();
