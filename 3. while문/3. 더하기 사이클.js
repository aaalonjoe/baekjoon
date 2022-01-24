
// function solution(n) {

//     let num = ['' + n];
//     if (num.length === 1) {
        
//         num.unshift('0');
//         resolve(num);
        
//     } else {
//         resolve(num);
//     }

//     function resolve(num) {
        
//         // 맨처음 합하기
//         let sum = +num[0] + +num[1];
        
//         // 그다음 while문 돌리기
        
//         let count = 0;
//         while (true) {
            
//             let result = [];
//             let number = num[1] + '' + sum; 
//             result.push(number);

//             count++;
//             if (num === number) break;
//         }



//         return count;
//     }
// }


// solution(4);

//  --------------- 나는 문자열로 풀려고 시도했다....-------------------//

function solution(n) {

    let num = n;
    let sum;
    let i = 0;

    while (true) {
        i++;

        sum = Math.floor(num / 10) + num % 10;
        num = (num % 10) * 10 + sum % 10; 

        if (n === num) break;
    }

    console.log(i);
}

solution(26);

// 각자리수를 구할떄 문자열이 아닌 Math함수로 찾아내면 훨씬 풀이가 쉬워진다!!