
function solution() {

    const input = [
        [5],
        [5, 50, 50, 70, 80, 90],
        [7, 100, 95, 90, 80, 70, 60, 50],
        [3, 7, 90, 80],
        [3, 7, 90, 81],
        [9, 100, 99, 98, 97, 96, 95, 94, 93, 91],
    ];

    for (let i = 1; i < input.length; i++) {
        
        let sum = 0;
        for (let j = 1; j < input[i].length; j++) {
            sum += input[i][j];
        }
        let avg = sum / input[i][0];

        // 평균넘는 학생의 수 count
        let count = 0;
        for (let k = 1; k < input[i].length; k++) {
            if (input[i][k] > avg) {
                count++;
            }
        }
        // 비율을 구하려면  x100 을 하면됨!!
        let upRate = (count / input[i][0]) * 100;
        // toFixed 메서드는 괄호안에 숫자 자리수 까지 반올림해준다!!
        console.log( upRate.toFixed(3) + '%' );
    }
}

solution();