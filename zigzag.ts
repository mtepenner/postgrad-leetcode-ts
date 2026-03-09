/** // Starts the block comment for the function description header
 * Converts a string into a zigzag pattern across a specified number of rows. // Describes the overall purpose of the script
 */ // Ends the block comment header
function convert(s: string, numRows: number): string { // Declares the function 'convert' taking string 's' and number 'numRows', returning a string
    if (numRows === 1 || numRows >= s.length) { // Checks if the number of rows is 1 or exceeds the string length
        return s; // Returns the original string immediately since a zigzag pattern isn't possible
    } // Closes the edge-case if statement block


    const rows: string[] = new Array(numRows).fill(""); // Initializes an array of 'numRows' length, filling it with empty strings for each row


    let currentRow: number = 0; // Initializes a variable to track the current row index, starting at the top row (0)
    let goingDown: boolean = false; // Initializes a boolean flag to track the vertical movement direction


    for (let i = 0; i < s.length; i++) { // Starts a loop to iterate through every character's index in the input string 's'
        const char: string = s[i]; // Extracts the character at the current index 'i'
        rows[currentRow] += char; // Appends the extracted character to the end of the string at 'currentRow' in the array


        if (currentRow === 0 || currentRow === numRows - 1) { // Checks if we are currently at the very top or the very bottom row
            goingDown = !goingDown; // Flips the movement direction flag (down becomes up, up becomes down)
        } // Closes the boundary check if statement block


        if (goingDown) { // Evaluates if the current traversal direction is downwards
            currentRow += 1; // Increments the row index by 1 to move to the row below
        } else { // Handles the alternative case where the traversal direction is upwards
            currentRow -= 1; // Decrements the row index by 1 to move to the row above
        } // Closes the direction modification else block
    } // Closes the character iteration for loop


    return rows.join(""); // Concatenates all strings in the 'rows' array into a single contiguous string and returns it
} // Closes the function body
