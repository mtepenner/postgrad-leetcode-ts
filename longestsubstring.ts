// Function definition: Takes a string 's' and returns the length of the longest unique substring
function lengthOfLongestSubstring(s: string): number {
    // Tracks the highest count of unique characters found so far
    let maxLength = 0;
    // The starting boundary (left side) of our current "window"
    let left = 0;


    // Map to store the most recent index where each character was encountered
    const charMap = new Map<string, number>();


    // The 'right' pointer expands the window by iterating through the string
    for(let right = 0; right < s.length; right++) {
        // Identify the character currently being added to the window
        const currentChar = s[right];
       
        // If we've seen this character before AND it is inside our current window boundaries
        if (charMap.has(currentChar) && charMap.get(currentChar)! >= left)
        {
            // Move the 'left' boundary to just after the last known position of this character
            // This "jumps" the window past the duplicate to keep the substring unique
            left = charMap.get(currentChar)! + 1;
        }


        // Update (or add) the character's most recent position in the Map
        charMap.set(currentChar, right);


        // Compare the current window size (right - left + 1) against the previous maximum
        maxLength = Math.max(maxLength, right - left + 1);
    }
   
    // Return the final result after checking the entire string
    return maxLength;
};
