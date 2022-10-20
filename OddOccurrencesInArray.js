A = [1,1, 2, 3, 3, 3, 9, 9,2]
let K = A.length
const occurancesCount = {}

for (let i = 0; i < K; i++) {
    if (occurancesCount[A[i]]) {
        occurancesCount[A[i]] = occurancesCount[A[i]] + 1
    } else {
        occurancesCount[A[i]] = 1
    }
}
console.log(occurancesCount)

let x;

for (let i in occurancesCount){
    if (occurancesCount[i]%2==1){
        x=i
    }

}
console.log(x)