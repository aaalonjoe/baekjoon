
function solution() {

    let arr = [5, [1, 2], [3, 4], [4, 5], [6, 7], [8, 9]];

    for (let i = 1; i < arr.length; i++) {
        console.log(`Case #${i}: ${arr[i][0] + arr[i][1]}`);
    }

}

solution();