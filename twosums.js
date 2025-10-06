const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

function findTargetPairs() {
    const results = [];

    // Loop through each element in the array
    for (let i = 0; i < nums.length; i++) { //(0;5<6;++)
        // Loop through the next elements to avoid repeating pairs
        for (let j = i + 1; j < nums.length; j++) {// (1;5<6;++)
            // Check if the sum equals the target
            if (nums[i] + nums[j] === target) {
                results.push([i, j]); // Add indices to results
            }
        }
    }

    return results;
}

console.log(findTargetPairs()); // Output: [[2, 4], [1, 5]]
