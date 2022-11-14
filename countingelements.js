// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //A unique array with no duplicates
    let x = 1
    
    uniq =  [...new Set(A)]
    uniq.sort(function(a, b){return a-b})
    let k = uniq.length
    

    for (let i = 0; i <= k; i++) {
        if (uniq[i] != x) {
            // return x
            console.log(x)
            break
        }   
        x = x + 1
    }

}

solution([-2,1,4,2,3,1,6])