function hasTargetSum(array, target) {
  
  for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] + array[j] === target) {
              return true; 
          }
      }
  }

  return false; 
}


/* 
  Write the Big O time complexity of your function here
  O(n2)
*/

/* 
  Add your pseudocode here
  Go over each element in the array
  Find another number in the array, which when added the any of the first numbers gone through would add up to the target 
  Return true if such a combination is found
  And false if it's not 
*/

/*
  Add written explanation of your solution here
  Iterate through each element in the array
  Check if there exists another element in the array so that array[i] + array[j] === target
  Return true if a pair is found that adds up to the target
  Return false otherwise 
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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10,18,36,50,49,80,101], 111));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum(["a","b","c","d","b"], "bb"));
}

module.exports = hasTargetSum;
