
function solution() {

    let arr = [3, 29, 38, 12, 57, 74, 40, 85, 61];


    // ------- 최대한 기초로 풀어보려했는데 초기값 선언할때 헷갈려서 막혔다.
    // ------- 초기값은 제일 첫번쨰로 잡아두고 for문 밖으로 뺴두기!!
    let maxValue = arr[0];
    let count = 0;

    for (let i = 1; i <= arr.length; i++) {
        
        if (maxValue < arr[i]) {
            maxValue = arr[i];    
            count = i;
        }

    }

    console.log(`${maxValue}\n${count+1}`);





    // ------- 내가 푼 방식 ---------
    // let max = Math.max(...arr);

    // let count = arr.indexOf(max) + 1;
    
    // console.log(`${max}\n${count}`);

}

solution();