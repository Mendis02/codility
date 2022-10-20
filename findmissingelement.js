function solution(A) {
    
    A.sort(function(a, b){return a-b})
    let x = 1
    let k = A.length

    for (let i = 0; i < k; i++) {
        if (A[i] != x) {
            return x
            break
        }   
        x = x + 1

    }
}