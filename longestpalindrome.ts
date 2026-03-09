// Function definition: Takes a string 's' and returns the longest palindromic substring found within it
function longestPalindrome(s: string): string {
    // Quick check: If the string is empty, there is no palindrome to return
    if(s.length < 1) return "";
    // Tracks the starting index of the longest palindrome found so far
    let start = 0;
    // Tracks the ending index of the longest palindrome found so far
    let end = 0;


    // Iterate through each character in the string, treating each as a potential center
    for(let i = 0; i < s.length; i++) {
        // Case 1: Odd-length palindromes (center is a single character, e.g., 'aba')
        const len1 = expandAroundCenter(s, i, i);
        // Case 2: Even-length palindromes (center is between two characters, e.g., 'abba')
        const len2 = expandAroundCenter(s, i, i + 1);


        // Identify which expansion resulted in a longer palindrome at this specific index
        const maxLen = Math.max(len1, len2);


        // If the new palindrome is longer than the current record, update our boundaries
        if(maxLen > end - start) {
            // Calculate the new start index based on the center 'i' and the total length
            start = i - Math.floor((maxLen - 1) / 2);
            // Calculate the new end index based on the center 'i' and the total length
            end = i + Math.floor(maxLen / 2);
        }
    }
    // Extract and return the substring using the final start and end boundaries
    return s.substring(start, end + 1);
};
