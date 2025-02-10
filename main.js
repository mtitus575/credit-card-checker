// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
    // This function checks the card validity.
const validateCred = (arr) => {
    
    let credCard = arr.slice(0, -1);    /*  This variable stores a shallow copy of the original array (card number) without changing the original card array.
                                            It also removes the last digit from the array (the check digit) */
    let reversedCard = credCard.toReversed(); // This variable stores the reversed array (without mutating the array)
    let originalCard = arr.toReversed(); //Stores the original card in reverse order. I will pull the first digit from here to add to the mutated array to sum all the digits.
    let evenNum;
    let unevenNum;
    let evenSum;
    let unevenSum;
    
    for (let i = 0; i < reversedCard.length; i++) { //iterates over the reversed array
        if (i % 2 == 0) { // Extracts the alternate numbers into a new variable.
            evenNum = reversedCard[i]; //assigns the array with alternate numbers to the "evenNum" variable
            evenNum = evenNum*2; //Doubles the alternate numbers
        
                if (evenNum > 9) { // removes 9 from each value if they are more than 9 after doubling.
                    evenNum-=9;
                } break;
                //console.log(evenNum);
        }
        // Add total of the evenNum array here:
            
    };

    for (let i = 0; i < reversedCard.length; i++) { //This is the array for the uneven list of numbers
        if (i % 2 == 1) {
            unevenNum = reversedCard[i];
           //console.log(unevenNum);
       }
   };


//summing up:
//Summing the values inside the arrays:
   

// adds ALL the totals in the variables together.
    const totalSum = evenNum + unevenNum + originalCard[0];
    //The above variable names might change but the formula is correct. The last variable should stay the same
    //console.log(totalSum);
    
//final step: checks modulo for true if 0. This is correct.
    if (totalSum % 10 === 0) {
        return true
    } else {
        return false
    }
};

console.log(validateCred(valid1));






