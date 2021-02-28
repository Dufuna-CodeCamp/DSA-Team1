function solution(nums) {
    let current = 0,
        last = 0,
        noOfJumps = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i > last) {
            noOfJumps++
            last = current
        };

        current = Math.max(current, i + nums[i])
    }

    return noOfJumps;
}

const getJump = solution([2, 3, 2, 4, 4])
console.log(getJump)

// Explanation

// Note: last = previous jump position, current = maximum index that can be reached at i

// 1. Loop through the array from the first index.
// 2. For each index, check if the index is greater than the last index value.
// 3. If 2. holds, then a jump is possible, increase number of jumps by 1 and update 
// the last value to be equal to the current value.
// 4. Then, update the current value to be the highest between the current value and the 
// available steps it can jump from the index
// 5. If 2 doesn't hold. Then just update current.
// 6. Return number of jumps.