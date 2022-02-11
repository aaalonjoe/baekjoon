function solution() {

    const input = 'UNUCIC';
    const dial = {
        ABC: 3,
        EDF: 4,
        GHI: 5,
        JKL: 6,
        MNO: 7,
        PQRS: 8,
        TUV: 9,
        WXYZ: 10
    };
    let minTime = 0;
    for (let i = 0; i < input.length; i++) {
        for (let x in dial) {
            if (x.includes(input[i])) {
                minTime += dial[x];
            }
        }
    }

    console.log(minTime);
}

solution();

// 배열이 아닌 객체로 받을생각을 못했다.
// 객체 for in 으로 1개씩 접근해서 그값에 input[i] 알파벳이 포함되어있으면
// 점수에 객체의 키값 dial[x] 를 더해서 출력

