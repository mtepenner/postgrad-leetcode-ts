/**
 * Calculates the maximum amount of water a container can store given an array of heights.
 * This solution uses the Two-Pointer technique for optimal O(n) performance.
 */
function maxArea(height: number[]): number {
    // Initialize the maximum area variable to zero to keep track of the best result.
    let maxA: number = 0;


    // Set the left pointer at the start of the array.
    let left: number = 0;


    // Set the right pointer at the very end of the array.
    let right: number = height.length - 1;


    // Continue the loop as long as the two pointers haven't crossed each other.
    while (left < right) {
        // Calculate the width of the container as the distance between the two pointers.
        const width: number = right - left;


        // Determine the height of the container, which is limited by the shorter of the two lines.
        const containerHeight: number = Math.min(height[left], height[right]);


        // Calculate the current area and update maxA if the current area is larger.
        maxA = Math.max(maxA, width * containerHeight);


        // Move the pointer pointing to the shorter line inward to try and find a taller line.
        if (height[left] < height[right]) {
            // Increment left pointer if the left line is shorter.
            left++;
        } else {
            // Decrement right pointer if the right line is shorter or equal.
            right--;
        }
    }


    // Return the highest area calculated during the pointer traversal.
    return maxA;
}
