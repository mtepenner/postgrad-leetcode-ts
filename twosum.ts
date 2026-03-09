// Defines a function that takes an array of numbers and a target sum, returning the indices of the two numbers
function twoSum(nums: number[], target: number): number[] {
    // Initializes a Hash Map to store numbers we've seen as keys and their indices as values
    const numMap = new Map<number, number>();


    // Starts a loop to iterate through the input array using the index 'i'
    for(let i = 0; i < nums.length; i++) {
        // Grabs the value of the element at the current index
        const currentNum = nums[i];
       
        // Calculates the specific value needed to reach the target (target - current = complement)
        const complement = target - currentNum;


        // Checks if the 'complement' is already stored in our Map (meaning we found the pair)
        if(numMap.has(complement)) {
            // Returns the index of the complement and the current index 'i' as the result
            // The '!' tells TypeScript we are certain the get() call won't return undefined
            return [numMap.get(complement)!, i];
        }
       
        // If the partner wasn't found, save the current number and its index to the Map for future iterations
        numMap.set(currentNum, i);
    }


    // Returns an empty array if no two numbers in the input add up to the target
    return [];
};
