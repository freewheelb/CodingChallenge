const findSum = function(array) {
    // Function Body
    let sum = array.reduce((a, b) => a + b, 0);

    // Return Statement
       return sum;
};

const findFrequency = function(array) {
  // your code here - don't forget to return an object!
};

const isPalindrome = function(str) {
  // Function Body
  let splitStr = str.split('');
   let revStr = splitStr.reverse();
   let joinStr = revStr.join('');

  // Return statement
   if (str === joinStr){
      return true;
   }
      return false;
};

const largestPair = function(array) {
  // Function Body
  let largestNum = 0;
  for (let n = 0; n < array.length; n++) {
    
    const element = (array[n] + (array[n + 1]));
    if (element > largestNum) {
      largestNum = element;
    }
  };
  // Return Statement
return largestNum;
};

const removeParenth = function(str) {
 // Function Body - Return index of requested characters & modifies original string
 let indexOne = str.indexOf('(');
 let indexTwo = str.indexOf(')');
 let edit = str.slice(indexOne, indexTwo + 1);
 let newString = str.replace(edit, '');

 // Return Statement
 return newString;
};

const scoreScrabble = function(str) {
  // your code here - don't forget to return a number!
};
