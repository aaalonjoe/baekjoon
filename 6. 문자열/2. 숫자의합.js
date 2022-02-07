function solution() {

    let arr = ['5', '54321'];

    let sum = 0;

    for (let num of arr[1]) {
        sum += +num;
    }

    console.log(sum);
}

solution();