

// 생성자를 만드는 함수 정의
function notSelfNumber(n) {

    let sum = n;
    while(true) {
        if (n === 0) break;
        sum += n % 10;
        n = Math.floor(n / 10);
    }      

    return sum;
    // 생성자를 만드는 함수가 아닐경우(셀프넘버)의 숫자를 출력
}

function selfNumber(n) {
    let selfNum = [];
    let result = [];

    for (let i = 1; i <= n; i++) {

        let index = notSelfNumber(i);
        if (index <= n) {
            selfNum[index] = true;
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!selfNum[i]) result.push(i);
    }
    // join메서드는 괄호안에 들어가는것이 배열값들 사이에 들어간다.
    console.log(result.join('\n'));
}

selfNumber(10000);