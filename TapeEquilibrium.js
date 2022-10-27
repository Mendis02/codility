function solution(A) {
    let n = A.length
    let x = 0
    let dif1, dif, mindif
    let sum = A.reduce((a, b) => a + b, 0)

    x = x + A[0]
    dif1 = sum - x * 2
    // console.log(dif1)
    dif = Math.abs(dif1)
    mindif = dif
    // console.log(mindif)
    if (n>2){
        for (let i = 1; i < (n-1); i++) {
            x = x + A[i]
            dif1 = sum - x * 2
            // console.log(dif1)
            dif = Math.abs(dif1)

            if (dif < mindif) {
                mindif = dif
            }
            // console.log(mindif)
        }
    }
    parseInt(mindif)
    // return mindif
    console.log(mindif)
}
solution([-10,-20,-30,-40,100])
