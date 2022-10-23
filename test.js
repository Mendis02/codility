A = [3,1,2,4,3]
let n=A.length
let x=0
let dif1,dif,mindif
let sum = A.reduce((a, b) => a + b, 0)

x = x + A[0]
dif1 = sum - x*2
dif = Math.abs(dif1)
mindif = dif


for (let i = 1; i < n ; i++) {
    x = x + A[i]
    dif1 = sum - x * 2
    dif = Math.abs(dif1)

    if (dif < mindif) {
        mindif = dif
    }


}
parseInt(mindif)
console.log(mindif)




