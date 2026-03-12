/**
 * Converts a Roman numeral string into its corresponding integer.
 * This implementation uses a look-ahead comparison to handle subtractive cases.
 */
function romanToInt(s: string): number {
    // Define a map of Roman numeral characters and their integer values.
    // We use a Record type for strict TypeScript key-value pairing.
    const romanMap: Record<string, number> = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };


    // Initialize the accumulator variable to store the final integer result.
    let total: number = 0;


    // Loop through each character of the string by index.
    for (let i: number = 0; i < s.length; i++) {
        // Retrieve the integer value of the current Roman character.
        const currentVal: number = romanMap[s[i]];
       
        // Retrieve the value of the next Roman character (if it exists).
        const nextVal: number = romanMap[s[i + 1]];


        // If the current value is less than the next value, it's a subtractive case (e.g., IV, XC).
        if (nextVal && currentVal < nextVal) {
            // Subtract the current value from the total result.
            total -= currentVal;
        } else {
            // Otherwise, simply add the current value to the total result.
            total += currentVal;
        }
    }


    // Return the final accumulated integer value.
    return total;
}
