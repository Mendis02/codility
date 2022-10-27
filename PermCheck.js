function solution(A) {
    
    A.sort(function(a, b){return a-b})
    let x = 1
    let k = A.length

    for (let i = 0; i < k; i++) {
        if (A[i] != x) {
            let y =0
            return y
            break
        }   
        x = x + 1

    }
    let z = 1
    return z
}
solution([1,3,2,4,6])