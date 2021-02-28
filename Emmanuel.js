/////////////////////////////////////////////////////////
//Task 2:
var fishAlive = function(A, B) {
    var leftAlive = A;
    let check = true;
    while (check) {
        check = false;
        for (let index = 0; index < A.length; index++) {
            var nowSize = A[index];
            var nextSize = A[index+1];
            var nowDir = B[index];
            var nextDir = B[index+1];
            if ((nowDir > nextDir) && (nowSize > nextSize)) {
                leftAlive.splice(index, 1);
                check = true;
            }
            if ((nowDir > nextDir) && (nowSize < nextSize)) {
                leftAlive.splice(index, 1);
                check = true;
            }
        }
    }
    return leftAlive.length;
}

console.log("Task 2: " + fishAlive([4,3,2,1,5], [0,1,0,0,0]));



//////////////////////////////////////////////////////////////
//Task 4:
var jumpSteps = function(array) {
    var jumps = now = highest = 0;

    for (index = 0; index < array.length-1; index++) {
        highest = Math.max(highest, index + array[index]);
        if (now === index) {
            jumps++;
            now = highest;
        }
    }
    return jumps;
};

console.log("Task 4: " + jumpSteps([2,3,1,1,4]));