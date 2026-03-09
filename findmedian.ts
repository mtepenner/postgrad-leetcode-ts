// Function definition: Finds the median of two pre-sorted numerical arrays
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensures nums1 is the shorter array to minimize the binary search range
    if(nums1.length > nums2.length) {
        // Recursive call with swapped arrays if nums1 is longer than nums2
        return findMedianSortedArrays(nums2, nums1);
    }


    // Stores the length of the shorter array (nums1)
    const m = nums1.length;
    // Stores the length of the longer array (nums2)
    const n = nums2.length;
    // Lower boundary for binary search on the shorter array
    let low = 0;
    // Upper boundary for binary search on the shorter array
    let high = m;


    // Standard binary search loop based on the partition index of nums1
    while (low <= high) {
        // Defines the split point in nums1 (middle of current search range)
        const partitionX = Math.floor((low + high) / 2);
        // Calculates the split point in nums2 so that left and right sides are balanced
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;


        // The largest value on the left side of the nums1 partition (or -Infinity if empty)
        const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        // The smallest value on the right side of the nums1 partition (or Infinity if empty)
        const minRightX = (partitionX === m) ? Infinity : nums1[partitionX];


        // The largest value on the left side of the nums2 partition (or -Infinity if empty)
        const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        // The smallest value on the right side of the nums2 partition (or Infinity if empty)
        const minRightY = (partitionY === n) ? Infinity : nums2[partitionY];


        // Check if we found the correct partition: all left elements <= all right elements
        if(maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // If the total number of elements is even
            if ((m + n) % 2 === 0) {
                // Median is the average of the two middle-most elements
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                // If total is odd, the median is the largest value on the left side
                return Math.max(maxLeftX, maxLeftY);
            }
        }
        // If we are too far right in nums1, move the search boundary to the left
        else if (maxLeftX > minRightY) {
            high = partitionX - 1;
        } else {
            // If we are too far left in nums1, move the search boundary to the right
            low = partitionX + 1;
        }
    }
    // Fallback error if the logic fails (usually due to unsorted input arrays)
    throw new Error("Input arrays are not sorted.");
};
