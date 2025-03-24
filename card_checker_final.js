// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8,];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
//Instruction 2:
const validateCred = arr => {
    const checkArray = arr.slice(); //creates a shallow copy of the array to be checked. This step prevents mutating the original
    let doubledNums = []; //will hold numbers to be doubled
    let notDoubled = []; //holds the rest of the numbers that are not douubled
    const checkDigit = checkArray.slice(-1); //holds the check digit. This number is not doubled in the luhn algorithm
    let finalArray = []; //to store both doubled and non doubled nums and then sum them

    for(let i=checkArray.length-2; i >= 0; i -=2) { //Loops through every 2nd element, starting with the one before the check digit
        checkArray[i]*=2; //Doubled each of the alternate elements

        if(checkArray[i] > 9) { 
            doubledNums.push(checkArray[i]-9); //subtracts 9 from each element that is bigger than 9 after doubling. It then pushes that result into the holding array
        } else {
            doubledNums.push(checkArray[i]); // pushes numbers that are less than 9 directly into the holding array
        }
    } //return doubledNums //not needed here. only one return can be used 

    for(let j = checkArray.length-3; j>=0; j-=2) { //loops through every other element starting at the 3rd from rear element
        notDoubled.push(checkArray[j]); //pushes the elements into this holding array
    } //return notDoubled //not needed here. only one return can be used 
    
    finalArray = doubledNums.concat(notDoubled).concat(checkDigit); //This step takes all the part of the array that was worked with above and concatenates it into the final array
    const sumOfNums = finalArray.reduce((accumulator, currentValue) => accumulator + currentValue); // Sums the array up and assigns the result to a new variable

    //This if statement will return a result based on the summed value modulo by 10.
    if (sumOfNums % 10 === 0) {
        return true; //true here means the card is valid
    } else {
        return false; //false here means the card is invalid
        }
};
// validateCred(valid1); //This is the function call.
// console.log(validateCred(valid1)); //Allows me to see what the function does in the console.


//Instruction 3:
const invalidArrays = []; //this array will store the invalid arrays. Placed in global scope - allows other functions to also access this variable.

//this function returns a nested array of invalid numbers.
const findInvalidCards = nestedArr => {
    //let invalidArrays = []; //this array will store the invalid arrays

    for(let x = 0; x < nestedArr.length; x++) { //loops through the nested arrays
        if(validateCred(nestedArr[x]) === false) { //calls the function that validates the cards and checks if it returns false
            invalidArrays.push(nestedArr[x]); //pushes the arrays that evaluates to false into the variable to hold nested arrays of incorrect cards
        } 
    } 
    return invalidArrays // returns the array or arrays. Notice the location of the return. It is scoped after the for loop to return all of the iterations.
};
// console.log(findInvalidCards(batch))
findInvalidCards(batch)
console.log(invalidArrays)

