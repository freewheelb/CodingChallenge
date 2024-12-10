// QUESTION 1 - 4 POINTS
const findSum = function(array) {
    // Simple reduce function to sum the array
    let sum = array.reduce((a, b) => a + b, 0);
       return sum;
    };

// QUESTION 2



// QUESTION 3 - 4 POINTS
// Function Body
const isPalindrome = function(str) {
   let splitStr = str.split('');
   let revStr = splitStr.reverse();
   let joinStr = revStr.join('');
   
   // Return Statement
   if (str === joinStr){
      return true;
   }
      return false;
   };

   // Split string and put into array
   // reverse it
   // joint it back together
   // compare it to the original
   // if the same, return true.
   // your code here - don't forget to return a boolean!


// QUESTION 4 - 3 POINTS
const largestPair = function(array) {
   let largestNum = 0;
   for (let n = 0; n < array.length; n++) {
     
     const element = (array[n] + (array[n + 1]));
     if (element > largestNum) {
       largestNum = element;
     }
   };
 return largestNum;
 };


//  QUESTION 5 - 3 POINTS
const removeParenth = function(str) {
   // Function Body - Return index of requested characters & modifies original string
     let indexOne = str.indexOf('(');
     let indexTwo = str.indexOf(')');
     let edit = str.slice(indexOne, indexTwo + 1);
     let newString = str.replace(edit, '');
   
     // Return Statement
     return newString;
   };




