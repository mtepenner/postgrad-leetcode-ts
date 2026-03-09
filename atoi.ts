/** // Starts the block comment for the function description header
 * Converts a string to a 32-bit signed integer, handling whitespace, signs, and overflow bounds. // Describes the overall purpose of the script
 */ // Ends the block comment header
function myAtoi(s: string): number { // Declares the function 'myAtoi' taking a string 's' and returning a number
    let index: number = 0; // Initializes a pointer variable to track our current position in the string
    let sign: number = 1; // Initializes the sign multiplier to 1 (positive) by default
    let result: number = 0; // Initializes the accumulator for the final integer result
    const INT_MAX: number = 2147483647; // Defines the maximum positive 32-bit signed integer limit
    const INT_MIN: number = -2147483648; // Defines the minimum negative 32-bit signed integer limit


    while (index < s.length && s[index] === ' ') { // Loops to skip all consecutive leading whitespace characters
        index++; // Increments the pointer to move to the next character in the string
    } // Closes the whitespace-skipping while loop


    if (index < s.length && (s[index] === '+' || s[index] === '-')) { // Checks if the first non-whitespace character is a sign indicator
        sign = s[index] === '-' ? -1 : 1; // Sets the sign to -1 if the character is '-', otherwise keeps it 1
        index++; // Increments the pointer to move past the parsed sign character
    } // Closes the sign-checking if statement block


    while (index < s.length && s[index] >= '0' && s[index] <= '9') { // Loops as long as the current character is a valid numeric digit
        const digit: number = s.charCodeAt(index) - 48; // Calculates the integer value of the digit using ASCII codes ('0' is 48)
       
        result = (result * 10) + digit; // Shifts the accumulated result left by one base-10 place and adds the new digit
        index++; // Increments the pointer to evaluate the next character
    } // Closes the digit-accumulation while loop


    result *= sign; // Applies the previously determined sign (positive or negative) to the accumulated numerical result


    if (result > INT_MAX) { // Checks if the calculated integer strictly exceeds the upper 32-bit limit
        return INT_MAX; // Returns the maximum 32-bit integer, effectively clamping the overflow
    } // Closes the upper-bound check block


    if (result < INT_MIN) { // Checks if the calculated integer strictly falls below the lower 32-bit limit
        return INT_MIN; // Returns the minimum 32-bit integer, effectively clamping the underflow
    } // Closes the lower-bound check block


    return result; // Returns the successfully parsed and bounded integer
} // Closes the function body
