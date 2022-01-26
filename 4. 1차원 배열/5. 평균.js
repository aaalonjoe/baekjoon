
function solution() {

    const subject = 4;
    const point = [1, 100, 100, 100];
    // 제일 큰 점수 찾기
    const maxValue =  Math.max(...point);
    // console.log(maxValue);
    
    // 만약 제일 큰수보다 작으면 점수변경 후 바로 평균
    let result = 0;
    
    for (let i = 0; i < point.length; i++) {
        
        result += point[i] / maxValue * 100;
        
    }
    console.log(result / subject);   
}

solution();