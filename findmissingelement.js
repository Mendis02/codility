function solution(A) {
    // write your code in JavaScript (Node.js 14)
    A.sort()
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