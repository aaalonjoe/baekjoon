function solution() {

    const input = ['221', '231'];
    
    // join() -> 괄호안에 들어가는것이 각 사이에 들어간 후 문자열로 만들어줌
    const reverseFirst = input[0].split("").reverse().join("");
    const reverseLast = input[1].split("").reverse().join("");

    console.log(reverseFirst > reverseLast ? reverseFirst : reverseLast); 
}

solution();