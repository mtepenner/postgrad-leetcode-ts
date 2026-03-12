/**
 * Finds all unique triplets in the array which gives the sum of zero.
 * Utilizes sorting and a two-pointer technique to achieve O(n^2) efficiency.
 */
function threeSum(nums: number[]): number[][] {
    // Initialize an empty array to store the resulting triplets.
    const result: number[][] = [];


    // Sort the input array in ascending order to enable the two-pointer approach.
    nums.sort((a, b) => a - b);


    // Iterate through the array, treating the current element as the first of the triplet.
    for (let i: number = 0; i < nums.length - 2; i++) {
        // If the current number is the same as the previous, skip it to avoid duplicate triplets.
        if (i > 0 && nums[i] === nums[i - 1]) continue;


        // If the current number is greater than zero, no triplet can sum to zero hereafter.
        if (nums[i] > 0) break;


        // Set the left pointer just after the current element.
        let left: number = i + 1;
        // Set the right pointer at the end of the array.
        let right: number = nums.length - 1;


        // Use two pointers to find the remaining two numbers.
        while (left < right) {
            // Calculate the sum of the triplet.
            const sum: number = nums[i] + nums[left] + nums[right];


            if (sum === 0) {
                // If sum is zero, add the triplet to the results.
                result.push([nums[i], nums[left], nums[right]]);


                // Move left pointer forward, skipping duplicates.
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Move right pointer backward, skipping duplicates.
                while (left < right && nums[right] === nums[right - 1]) right--;


                // Move both pointers inward after finding a valid triplet.
                left++;
                right--;
            } else if (sum < 0) {
                // If sum is too small, move the left pointer to increase the total value.
                left++;
            } else {
                // If sum is too large, move the right pointer to decrease the total value.
                right--;
            }
        }
    }


    // Return the list of unique triplets found.
    return result;
}
