
function solution() {

    let arr = [150, 266, 427];

    let multiValue = 1;
    for (let i = 0; i < arr.length; i++) {
        multiValue *= arr[i];
    }


    // 첫번째 풀이
    // String 은 문자열로 바꾸어줌
    const str = String(multiValue);

    // for (let i = 0; i <= 9; i++) {
    //     let count = 0;
    //     for (let j = 0; j < str.length; j++) {
    //       if (Number(str[j]) === i) {
    //         count++;
    //       }
    //     }
    //     console.log(count);
    // }


    console.log(str);
    // 두번쨰 풀이
    for (let i = 0; i <= 9; i++) {
        
        // 각 숫자별로 쪼개서 
        console.log(str.split(String(i)).length - 1);

    }
}

solution();