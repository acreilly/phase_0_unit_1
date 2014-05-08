// I paired [by myself] on this challenge.




// Pseudocode
//  test 1 - the secret number has to be a number so I will define the variable as a number, I will choose 7 to make test 2 work
// test 2 -  secret number variable has been defined 7
// test 3 - the password should be a string so i will define the variable as a string
// test 4 - define the variable
// test 5 -I will define allowedIn variable as a boolean
// test 6 - define allowedIn
//test 7 -I will define members as an array
//test 8 -assign first element in array as john
// test 9 - assign fourth element in array as mary


// __________________________________________
// // Write your code below.

// var secretNumber = 7;
// var password = "just open the door";
// var allowedIn = false;
// var members = [];
// members[0] = "John";
// members[3] = "Mary";





// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber = 7;
var password = "just open the door";
var allowedIn = false;
var members = ["John", , ,"Mary"];



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

