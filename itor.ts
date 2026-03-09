/**
 * Converts an integer (1-3999) into a Roman numeral string.
 * Uses a greedy approach by iterating through a predefined map of values.
 */
function intToRoman(num: number): string {
    // Define an array of objects mapping integer values to their Roman numeral equivalents.
    // We include subtractive cases (like 900, 400, 90, etc.) to simplify the loop logic.
    const lookup: { value: number; symbol: string }[] = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];


    // Initialize an empty string to accumulate the Roman numeral symbols.
    let result: string = "";


    // Iterate through each value-symbol pair in our lookup table.
    for (const item of lookup) {
        // While the current number is greater than or equal to the current Roman value...
        while (num >= item.value) {
            // Append the symbol to our result string.
            result += item.symbol;
            // Subtract the value from our current number.
            num -= item.value;
        }
    }


    // Return the final constructed Roman numeral string.
    return result;
}
