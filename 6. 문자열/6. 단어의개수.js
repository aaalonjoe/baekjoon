function solution() {
    
    const input = "The Curious Case of Benjamin Button";

    const word = input.trim().split(" ");  // trim()은 문자열 맨 앞뒤 공백 제거
    
    console.log(word[0] === "" ? 0 : word.length);

}

solution();