function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const additionNum = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === additionNum) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here

*/

/* 
  Add your pseudocode here
  we are iterating over the array. we have a number , we find a 
  number that when we add to it we we get the target number. 
  we check the remaining numbers in the array after we identify the number
  then we find the number that we can add to it to find the target
*/

/*
  Add written explanation of your solution here
  In this function we check in the given array and find a number that when
  added to gets to oour target
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;