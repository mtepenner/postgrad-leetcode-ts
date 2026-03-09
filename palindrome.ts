/** // Starts the block comment for the function description header
 * Determines if an integer reads the same forwards and backwards without string conversion. // Describes the overall purpose of the script
 */ // Ends the block comment header
function isPalindrome(x: number): boolean { // Declares the function 'isPalindrome' taking a number 'x' and returning a boolean
    if (x < 0 || (x !== 0 && x % 10 === 0)) { // Checks if the number is strictly negative or if it ends with a zero (but is not exactly zero)
        return false; // Returns false early because these specific categories of numbers can never mathematically be palindromes
    } // Closes the edge-case validation if statement block


    let revertedNumber: number = 0; // Initializes a variable to accumulate the reversed second half of the integer's digits


    while (x > revertedNumber) { // Loops continuously as long as the remaining first half of 'x' is greater than the reversed second half
        revertedNumber = (revertedNumber * 10) + (x % 10); // Shifts 'revertedNumber' left by one base-10 place and appends the rightmost digit of 'x'
        x = Math.trunc(x / 10); // Strips the rightmost digit from 'x' by dividing by 10 and explicitly discarding the fractional remainder
    } // Closes the digit reversal while loop


    return x === revertedNumber || x === Math.trunc(revertedNumber / 10); // Evaluates to true if halves match directly (even length) or match when ignoring the middle digit (odd length)
} // Closes the function body
