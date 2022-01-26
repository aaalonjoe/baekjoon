solution = () => {
    
    let arr = [39,40,41,42,43,44,82,83,84,85];

    let result = [];
    for (let i = 0; i < arr.length; i++) {

        result.push(arr[i] % 42);
        
    }
    // console.log(result);
    // 배열에서 중복된 것들 제거하고 중복안된것들만 담기
    let count = [...new Set(result)];

    console.log(count.length);


    // 다른 사람 풀이
    // 인덱스 메서드를 이용해 해당배열에 나머지가 없으면 새배열에 추가
    // 추가하면서 기존에 똑같은 나머지가 있으면 넘어가고 없으면 추가
    // let num = x % 42;
    // if (result.indexOf(num) === -1) {
    //     result.push(num);
    // }
    
    
}

solution();


