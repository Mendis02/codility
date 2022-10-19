A = [1, 2, 3, 3, 3, 9, 9]
let K = A.length
const occurancesCount = {}

for (let i = 0; i < K; i++) {
    if (occurancesCount[A[i]]) {
        occurancesCount[A[i]] = occurancesCount[A[i]] + 1
    } else {
        occurancesCount[A[i]] = 1
    }
}
console.log(occurancesCount.size)
//for (let i = 0 ; i++;){

    //console.log(occurancesCount[i])
