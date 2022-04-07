// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe("whoAmI", () => {
  // A test/it method, nested within the describe block, that in plain words, describe what the function does.
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    // An expect method, nested within the test block, calling on aboutThem function, followed by the toEqual() matcher that checks the expected output of the function return. Create 1 expect.
      expect(whoAmI(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
           })
      })

// Good Failure
// ● whoAmI › takes in an array of objects and returns an array with a sentence about each person with their name capitalized

// ReferenceError: whoAmI is not defined



// b) Create the function that makes the test pass.

// Pseudo-Code: 

      // input: array of objects
      // output: a new array consisting of ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

      //Process: 
      // Use .map to iterate over the original array to retrun an array of the same length

      // Make a variable declaration within the map method to split the name key in the object. 

      // After the name is converted into a string using the .split method, create another variable and use toUpperCase method to target index 0 in order to capitalize the first word and then target the index 0 within the first word in order to capitalize the first letter. 

      // Next, use toUpperCase method again to target index 1 in order to capitalize the second word and then target the index 0 within the second word in order to capitalize the first letter. 

      // Return a statement where it is string interpolated about the person. Use the variable containing the uppercase method and substring method. And then use value.occupation to call on the object key pair value.




const whoAmI = (array) => {
  return array.map((value) => { 
    let splitName = value.name.split(" ")
   let nameUppercase = splitName[0][0].toUpperCase() + splitName[0].substring(1) + " " + splitName[1][0].toUpperCase() + splitName[1].substring(1)
   return `${nameUppercase} is ${value.occupation}.`
  })
}

// Test Passed

//  PASS  ./code-challenges.test.js
// whoAmI
// ✓ takes in an array of objects and returns an array with a sentence about each person with their name capitalized (2 ms)







// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

  // A describe method that lists the name of the function OR naming of the particular test.
  describe("theRemainders", () => {
    // A test/it method, nested within the describe block, that in plain words, describe what the function does.
    it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
      const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
      // Expected output: [ 2, 0, -1, 0 ]
      const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
      // Expected output: [ 2, 1, -1 ]
      // An expect method, nested within the test block, calling on remainderArr function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects.
        expect(theRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
        expect(theRemainders(hodgepodge2)).toEqual([2, 1, -1])
             })
        })

// Good Failure
// ● theRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3

// ReferenceError: theRemainders is not defined


// b) Create the function that makes the test pass.



// Pseudo-Code:
    // Input: Array of mixed datatypes

    // Output: returns an array of only the REMAINDERS of the numbers when divided by 3.

    // Create a new variable inside of the remainder function using the .filter method in order to return a new array where it is only numbers using the built-in method typeof.

    // Then return that new variable and use .map to iterate and use the moudulo operator on each number


const theRemainders = (array) => {
  let filterNums = array.filter(value => {
    return typeof value === "number" 
  })
  return filterNums.map(value => {
    return value % 3
  })
}

// Test Passed
//  PASS  ./code-challenges.test.js

// theRemainders
//   ✓ takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3 (1 ms)







// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

  
    // A describe method that lists the name of the function OR naming of the particular test.
    describe("doTheMath", () => {
      // A test/it method, nested within the describe block, that in plain words, describe what the function does.
      it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
        const cubeAndSum1 = [2, 3, 4]
        // Expected output: 99
        const cubeAndSum2 = [0, 5, 10]
        // Expected output: 1125
        // An expect method, nested within the test block, calling on mathDoer function, followed by the toEqual() matcher that checks the expected output of the function return. Create 2 expects.
          expect(doTheMath(cubeAndSum1)).toEqual(99)
          expect(doTheMath(cubeAndSum2)).toEqual(1125)
               })
          })


// Good Failure
// ● doTheMath › takes in an array of numbers and returns the sum of all the numbers cubed

// ReferenceError: doTheMath is not defined



// b) Create the function that makes the test pass.

 // Pseudo Code:
      // Declare a new variable where the .map is used on the array. It is iterating through each of the numbers and cubing it. 
      // Return that variable and use the.reduce method with the variable. Inside of reduce use (a,b) => a + b. This will be basically creating a range where it adds all the numbers up inside the array. 

      
      const doTheMath = (array) => {
        let raiseToThree = array.map(value => {
          return value ** 3
        }) 
        return raiseToThree.reduce((a,b)=> a + b)
      }
      

  // Test Passed
  // PASS  ./code-challenges.test.js
  // doTheMath
  //   ✓ takes in an array of numbers and returns the sum of all the numbers cubed