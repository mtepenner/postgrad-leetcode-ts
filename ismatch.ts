/** // Starts the block comment for the function description header
 * Implements regular expression matching with support for '.' and '*' using Dynamic Programming. // Describes the overall purpose of the script
 */ // Ends the block comment header
function isMatch(s: string, p: string): boolean { // Declares the function 'isMatch' taking two strings and returning a boolean
    const m: number = s.length; // Stores the length of the input string 's'
    const n: number = p.length; // Stores the length of the pattern string 'p'
   
    const dp: boolean[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(false)); // Initializes an (m+1) x (n+1) 2D boolean array filled with 'false'


    dp[0][0] = true; // Sets the base case: an empty string matches an empty pattern


    for (let j = 1; j <= n; j++) { // Loops through the pattern to handle edge cases where a pattern matches an empty string
        if (p[j - 1] === '*') { // Checks if the current character in the pattern is an asterisk
            dp[0][j] = dp[0][j - 2]; // Evaluates the '*' as zero occurrences, inheriting the match status from two steps back in the pattern
        } // Closes the asterisk evaluation if statement block
    } // Closes the empty string initialization loop


    for (let i = 1; i <= m; i++) { // Starts the outer loop to iterate through each character of the input string 's'
        for (let j = 1; j <= n; j++) { // Starts the inner loop to iterate through each character of the pattern 'p'
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) { // Checks if the current pattern character matches the string character, or is a wildcard '.'
                dp[i][j] = dp[i - 1][j - 1]; // Inherits the match status from the diagonal cell (previous characters in both string and pattern)
            } else if (p[j - 1] === '*') { // Checks if the current pattern character is an asterisk '*' instead
                dp[i][j] = dp[i][j - 2]; // Defaults to assuming the '*' represents zero occurrences of the preceding character
               
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) { // Checks if the character immediately preceding the '*' matches the current string character
                    dp[i][j] = dp[i][j] || dp[i - 1][j]; // Updates to true if either the zero-occurrence case was true OR if consuming the current string character results in a match
                } // Closes the preceding character match check block
            } // Closes the wildcard and asterisk evaluation block
        } // Closes the inner loop for the pattern
    } // Closes the outer loop for the string


    return dp[m][n]; // Returns the final match evaluation found at the bottom-right corner of the DP table
} // Closes the function body
