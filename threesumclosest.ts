/**
 * Purpose: Find three integers in nums such that the sum is closest to target.
 * Returns the sum of the three integers.
 */
function threeSumClosest(nums: number[], target: number): number {
    // Sort the array in ascending order to enable the two-pointer technique
    nums.sort((a, b) => a - b);
   
    // Initialize closestSum with the sum of the first three elements
    let closestSum: number = nums[0] + nums[1] + nums[2];


    // Iterate through the array, treating nums[i] as the first element of the triplet
    for (let i = 0; i < nums.length - 2; i++) {
        // Initialize left pointer just past the current element
        let left: number = i + 1;
        // Initialize right pointer at the very end of the array
        let right: number = nums.length - 1;


        // Use a while loop to shrink the window from both ends
        while (left < right) {
            // Calculate the sum of the current triplet
            const currentSum: number = nums[i] + nums[left] + nums[right];


            // If the current sum is closer to the target than our previous best, update it
            if (Math.abs(target - currentSum) < Math.abs(target - closestSum)) {
                // Update the global closest sum
                closestSum = currentSum;
            }


            // If the current sum is less than the target, we need a larger sum
            if (currentSum < target) {
                // Move the left pointer forward to increase the total sum
                left++;
            }
            // If the current sum is greater than the target, we need a smaller sum
            else if (currentSum > target) {
                // Move the right pointer backward to decrease the total sum
                right--;
            }
            // If the current sum is exactly equal to the target
            else {
                // We cannot get any closer than an exact match, so return it immediately
                return currentSum;
            }
        }
    }


    // Return the best sum found after checking all relevant triplets
    return closestSum;
}
