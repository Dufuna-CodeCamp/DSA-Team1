function solution(A, B) {

    for (let i = 0; i < B.length; i++) {
        if (B[i] == 1 && B[i + 1] == 0) {
            if (A[i] > A[i + 1]) {
                B.splice(i + 1, 1);
                i--
            } else if (A[i + 1] > A[i]) {
                B.splice(i, 1)
                i--
            }
        }
    }

    return B.length;
}

const sizeOfFish = [4, 3, 2, 1, 5]
const directionOfFish = [0, 1, 0, 1, 0]
const getFish = solution(sizeOfFish, directionOfFish)
console.log(getFish)

// 1. Loop over Array B to determine if nearby fishes are in opposite directions and can meet.
// 2. If there happens to be any fish that meets condition in 1, then check the value of the 2 
//     fishes in Array A using their indexes
// 3. If the size of the first is larger than the second, we say fish 1 eats 2, and remove fish 2 from Array B.
// 4. Else, if the size of the second is larger than the first, then we remove fish 1 from Array B, as fish 2 eats 1.
// 5. If condition 1 is not met, then, no fish is removed from Array B
// 6. Then we return the length of the 2nd array to give us how many fish are left alive.