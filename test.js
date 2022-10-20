// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 14)
    let K = A.length
    const occurancesCount = {}

    for (let i = 0; i < K; i++) {
        if (occurancesCount[A[i]]) {
            occurancesCount[A[i]] = occurancesCount[A[i]] + 1
        } else {
            occurancesCount[A[i]] = 1
        }
    }
    let x ;
    for (let i in occurancesCount){
        if (occurancesCount[i]%2==1){
            x=parseInt(i)
        }
    }
return x
}
