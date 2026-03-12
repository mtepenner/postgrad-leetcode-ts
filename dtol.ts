/**
 * Purpose: Generate all possible letter combinations for a given string of phone keypad digits.
 * Uses a backtracking (Depth-First Search) approach to explore all valid combinations.
 */
function letterCombinations(digits: string): string[] {
    // Check if the input string is empty, returning an empty array if true
    if (digits.length === 0) return [];


    // Define the result array to store all complete letter combinations
    const result: string[] = [];


    // Create a mapping dictionary from a digit character to its corresponding letters
    const digitToLetters: Record<string, string> = {
        // Map digit '2' to its keypad letters "abc"
        '2': 'abc',
        // Map digit '3' to its keypad letters "def"
        '3': 'def',
        // Map digit '4' to its keypad letters "ghi"
        '4': 'ghi',
        // Map digit '5' to its keypad letters "jkl"
        '5': 'jkl',
        // Map digit '6' to its keypad letters "mno"
        '6': 'mno',
        // Map digit '7' to its keypad letters "pqrs"
        '7': 'pqrs',
        // Map digit '8' to its keypad letters "tuv"
        '8': 'tuv',
        // Map digit '9' to its keypad letters "wxyz"
        '9': 'wxyz'
    };


    // Define a recursive helper function to perform the backtracking
    const backtrack = (index: number, currentString: string): void => {
        // Check if the length of the current combination equals the input digits length
        if (index === digits.length) {
            // Add the completed valid combination to our result array
            result.push(currentString);
            // Return to stop further exploration on this recursion branch
            return;
        }


        // Retrieve the string of letters corresponding to the current digit
        const letters: string = digitToLetters[digits[index]];


        // Iterate over each letter in the retrieved string of letters
        for (let i = 0; i < letters.length; i++) {
            // Recursively call backtrack for the next digit index, appending the current letter
            backtrack(index + 1, currentString + letters[i]);
        }
    };


    // Initialize the backtracking process starting at index 0 with an empty string
    backtrack(0, "");


    // Return the fully populated array of letter combinations
    return result;
}
