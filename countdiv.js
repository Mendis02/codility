function solution(A, B, K) {
    let arr = []
    
    
    for (let i = A; i<=B;i++){
        if(i%K == 0){
            arr.push(i)
        }

    }
    let l = arr.length
    // console.log(l)
    return l



}
solution(6,11,2)