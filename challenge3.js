function solution(N, A) {
    let counter = [];
    let max = 0;

    for (let i = 0; i < N; i++) {
        counter.push(0)
    };

    for (let i = 0; i < A.length; i++) {
        if (A[i] <= N) {
            counter[A[i] - 1]++
        } else {
            max = Math.max(...counter)
            counter.fill(max)
        }
    };

    return counter;
};

const getCount = solution(6, [1, 1, 1, 6, 1])
console.log(getCount)

// Explanation
// 1. Create N counters with value = 0 at start.
// 2. Loop over all elements in array.
// 3. If element value is less than or equal to N, then increment the value counter by 1.
// 4. If element value is greater than N (ie N+1), make all N counters be filled with the maximum value in the counters.
// 5. Return counter