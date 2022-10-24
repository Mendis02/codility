function solution(X, A) {
    
    const set = []
    let l = A.length
    let sum = 0

    for (i = 0; i < l; i++) {
        set.push(A[i])
        sum = sum + A[i]
            if (sum == (X / 2) * (X + 1)) {
                console.log(i)
            }
    }

    if (sum != (X / 2) * (X + 1)) {
        let y = -1
        console.log(y)
    }

}

solution(5,[1,3,1,4,2,3,5,4])