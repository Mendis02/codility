// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 14)
    
    for (let i=0; i<K;i++ ){
        let lastelement = A[A.length -1]
        A.pop()
        A.unshift(lastelement)
    }
    return A
}

let x= solution([1,2,3],2)
console.log(x)