
function solution() {
    
    let arr = [[1,1], [2,3], [3,4], [9,8], [5,2], [0,0]];

    let n = 0;
    while (n < arr.length) {
        
        if (arr[n][0] + arr[n][1] !== 0) {
            console.log(arr[n][0] + arr[n][1]);
        } else {
            continue;
        }
        n++;
    }
    

}

solution();