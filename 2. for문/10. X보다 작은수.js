
function solution() {
    
    let arr = [[10, 5], 1, 10, 4, 9, 2, 3, 8, 5, 7, 6];

    let emptyArr = [];
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < 5) {
            emptyArr.push(arr[i]);
        }

    }
    console.log(emptyArr);
}

solution();