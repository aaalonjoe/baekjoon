
solution = (n) => {

    let count = 0;
    
    for (let i = 1; i <= n; i++) {

        let hundredNum = Math.floor(i / 100);
        let tenNum = Math.floor(i / 10) % 10;
        let oneNum = Math.floor(i % 10);

        if (i < 100) {
            count++;
        } else if (n >= 100 && n < 1000) {
            if (hundredNum - tenNum === tenNum - oneNum) {
                count++;
            }
        }

    } 

    console.log(count);
}

solution(210);