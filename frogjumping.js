// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 14)
    let numberofjumps = (Y-X)/D
    return(Math.ceil(numberofjumps)) 
}
