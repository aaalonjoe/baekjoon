solution = () => {
    
    const input = [
        '5',
        'OOXXOXXOOO',
        'OOXXOOXXOO',
        'OXOXOXOXOXOXOX',
        'OOOOOOOOOO',
        'OOOOXOOOOXOOOOX'
    ];

    for (let i = 1; i <= input[0]; i++) {
        let count = 1;
        let total = 0;
        // 1번 인덱스의 0번 인덱스부터 값을 구하는데,
        // O가 나오면 1점더하고 count에 1점 up, X가 나오면 count 다시 1점 부터 시작 
        for (let j = 0; j < input[i].length; j++) {

            if (input[i][j] === 'O') {
                total += count;
                count++;
            } else {
                count = 1;
            }
            }
        console.log(total);
    }

}

solution();