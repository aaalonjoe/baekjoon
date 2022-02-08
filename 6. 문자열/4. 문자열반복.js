function solution() {

    const input = [
        '2',
        '3 ABC',
        '5 /HTP'
    ];

    const T = +input[0]; 

    for (let i = 1; i <= T; i++) {
        
        const R = +input[i][0];
        const S = input[i].slice(2);
        let P = '';

        for (let j = 0; j < S.length; j++) {
            for (let k = 0; k < R; k++) {
                P += S[j];
            }
        }
        console.log(P);
    }
    

    

}

solution();
