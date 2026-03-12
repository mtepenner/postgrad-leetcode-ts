/**
 * Finds the longest common prefix string amongst an array of strings.
 * Uses the Horizontal Scanning method for clear and efficient comparison.
 */
function longestCommonPrefix(strs: string[]): string {
    // If the input array is empty, there is no common prefix to find.
    if (strs.length === 0) {
        // Return an empty string as the default for empty input.
        return "";
    }


    // Initialize the prefix as the entirety of the first string in the array.
    let prefix: string = strs[0];


    // Iterate through the rest of the strings starting from the second element.
    for (let i: number = 1; i < strs.length; i++) {
        // While the current string 'strs[i]' does not start with the current 'prefix'...
        // indexOf returns 0 if the string starts with the prefix.
        while (strs[i].indexOf(prefix) !== 0) {
            // Shorten the prefix by removing the last character.
            prefix = prefix.substring(0, prefix.length - 1);


            // If the prefix is reduced to an empty string, no commonality exists.
            if (prefix === "") {
                // Exit early and return an empty string.
                return "";
            }
        }
    }


    // Return the resulting prefix that is common to all strings in the array.
    return prefix;
}
