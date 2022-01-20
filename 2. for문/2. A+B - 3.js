

let arr = [5, [1, 2], [3, 4], [4, 5], [6, 7], [8, 9]];

let count = arr.length;

for (let i = 1; i < count; i++) {
    let num1 = arr[i][0];
    let num2 = arr[i][1];
    console.log(num1 + num2);
}