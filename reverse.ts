/** // Starts the block comment for the function description header
 * Reverses the digits of a 32-bit signed integer, returning 0 if the result overflows. // Describes the overall purpose of the script
 */ // Ends the block comment header
function reverse(x: number): number { // Declares the function 'reverse' taking a number 'x' and returning a number
    let result: number = 0; // Initializes a variable 'result' to 0 to incrementally build the reversed integer
    const limit: number = 2147483648; // Defines the absolute boundary for a 32-bit signed integer (2 to the power of 31)


    while (x !== 0) { // Starts a loop that continues as long as there are digits left to process in 'x'
        const digit: number = x % 10; // Extracts the rightmost digit of 'x' using the modulo operator (preserves negative signs)
        x = Math.trunc(x / 10); // Removes the rightmost digit from 'x' by dividing by 10 and truncating the decimal portion
       
        result = (result * 10) + digit; // Shifts the 'result' left by one base-10 place and adds the extracted 'digit'


        if (result > limit - 1 || result < -limit) { // Checks if the newly formed 'result' falls outside the 32-bit signed integer range
            return 0; // Returns 0 immediately to handle the overflow/underflow condition as strictly required
        } // Closes the bounds checking if statement block
    } // Closes the digit extraction and accumulation while loop


    return result; // Returns the fully reversed integer after all digits have been successfully processed
} // Closes the function body
