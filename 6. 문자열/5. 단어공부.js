function solution() {

    let input = 'Mississipi';
    // length 가 26인 배열을 만드는데, 0으로 채워라!
    let count = new Array(26).fill(0);
    let aToZ = [];
    // 다 대문자로 만들고 한글자씩 쪼개라!
    let upperCaseArr = input.toUpperCase().split("");
    console.log(upperCaseArr);

    for (let i = 65; i <= 90; i++) {
        aToZ.push(String.fromCharCode(i))
    }

    console.log(aToZ);

    for (let j = 0; j < upperCaseArr.length; j++) {
        for (let k = 0; k < aToZ.length; k++) {
            if (upperCaseArr[j] === aToZ[k]) {
                count[k] += 1;
            }
        }
    }
    console.log(count);

    const max = Math.max(...count);  // 큰값들중 가장 왼쪽값이 나옴
    console.log(max);
    
    // reduce는 잘모르겠다...
    // const max = count.reduce((a, b) => Math.max(a, b));
    // const max = count.reduce(function(a,b) {
    //                              return Math.max(a, b)
    //                          })

    const index = count.indexOf(max);
    console.log(index);

    const lastIndex = count.lastIndexOf(max);  // lastIndexOf 똑같은값이 여러개면 마지막에 나온값
    console.log(lastIndex);

    // A가 65번이니까! 
    const alphabet = String.fromCharCode(index + 65);
    console.log(alphabet);

    if (index !== lastIndex) {
        console.log("?");
    } else {
        console.log(alphabet);
    }

}

solution();      

// 1. 입력값을 다 대문자로 받기(대소문자 구분짓지 않아야하고, 대문자로 출력해야하니!)
// 2. 그것을 한글자로 쪼개서 새 변수에 선언하기
// 3. 유니코드로 대문자A(65)부터 Z(90)까지 빈배열에 추가해서 만들기
// 
// 4. for문으로 전자와 후자 비교해서 같은알파벳 나올경우 count++ 로 1씩 올리기
// 5. 올라간 숫자(해당알파벳이 가장많이들어간 알파벳 인덱스) 중 가장큰값 변수에 선언
// 6. 그 가장 큰값의 인덱스번호를 새변수에 선언
// 7. 가장큰값(ex. i가 4번, s가 4번이면 가장 큰값이 2개기때문에) 이 2개 이상이면 제일 마지막꺼를 새변수에 선언
// 8. 제일큰값 마지막큰값 인덱스가 다르면 max값이 2개이상이므로 ? 출력
// 9. 제일큰값 마지막큰값 인덱스가 같다면 max값이 1개이므로 그 알파벳을 출력
// 10. 그 큰 알파벳은 A가 65번부터 시작이니 65 + 인덱스번호 하면 그알파벳이 나온다!

// 1. 26개의 0으로 찬 빈배열
// 2. 문자열 1개씩 나눠서 담은 배열
// 3. 알파벳 A부터z 까지 담은 배열

// 4.  2,3번 for문으로 돌려서 같은알파벳이 나오면
//     1번 빈배열 위치에 숫자 카운트 올리기
// 5. 가장큰값이 여러개인지 어떻게 구분?
//    큰값과 마지막 큰값 비교해서 같으면 ? 출력, 아니면 그 알파벳출력
// 6. 그 알파벳은? 65 + 인덱스 번호









































































 