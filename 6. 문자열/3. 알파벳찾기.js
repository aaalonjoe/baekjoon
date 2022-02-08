
function solution() {

    let input = 'baekjoon';

    let result = [];
    for (let i = 97; i < 123; i++) {
        
        // String.fromCharCode -> 아스키코드값으로 문자열반환!
        result.push(input.indexOf(String.fromCharCode(i)));
    }

    // join -> 배열에서 꺼내서 따옴표 안에 있는걸로 구분해서 렌더링
    console.log(result.join(" "));

}

solution();