function solution(X, A) {

    let l = A.length
    let sum =0
    let arr =[]

    for (let i=0;i<l;i++){
        if(!arr.includes(A[i])){
            arr.push(A[i])
            sum = sum+A[i]
        }
        if (sum == (X / 2)*(X + 1)) {
            // return i
            console.log(i)
            break
        }

    }
    if (sum != (X / 2) * (X + 1)) {
        let y = -1
        // return y
        console.log(y)
    }
    console.log(arr)
    sum == (X / 2)*(X + 1)
    console.log(sum)
}

solution(5,[1,3,1,4,2,3,4])