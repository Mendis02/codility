function solution(N, A) {
    var arr = []
    let maxvalue = 0

    for (let i = 0; i < N; i++) {
        arr[i] = 0
    }
    // console.log(arr)
    // console.log(A)

    for (let K = 0; K < A.length; K++) {
        if (A[K] <= N) {
            arr[A[K] - 1] = arr[A[K] - 1] + 1
            maxvalue = Math.max(...arr)
            // console.log(arr)
            // console.log(maxvalue)
        } else {
            // console.log(maxvalue)

            //this for loop is not working
            for (let j = 0; j < arr.length; j++) {
                arr[j] = maxvalue
                // console.log(arr[j])
                // console.log(arr)
            }
            // console.log(A[K])
            // console.log(arr)
        }
    }
    console.log(arr)
    // console.log(maxvalue)

}
solution(5, [3,4,4,6,1,4,4])
