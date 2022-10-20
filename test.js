const arr = [2, 1, 3, 6, 5, 7,4,10]
arr.sort(function(a, b){return a-b})
let x = 1
let k = arr.length
for (let i = 0; i < k; i++) {
    if (arr[i] != x) {
        console.log(x)
        break
    }
    x = x + 1

}
console.log(arr)