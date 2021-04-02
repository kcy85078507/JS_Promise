//.reduce 를 사용하여, randomNumbers의 값을 모두 더한 값을 answer_1 에 할당하라. 

const randomNumbers = [2,3,45,5,12,1,23,124,1,24,124,1,24,152,23456,46,85,6,358,6,6956,7,68,56];

// let answer_1 = randomNumbers.reduce( (pre, value, idx, arr) => {
//     return pre + value;
// });
// console.log(answer_1);

let answer_1 = randomNumbers.reduce(function(a, b){
    return a + b;
});
console.log(answer_1);

//.map 을 사용해서 randomNumbers의 각 버킷의 값이 짝수라면, true,홀수라면 false로 변경하고 answer_2에 할당하라

let answer_2 = randomNumbers.map((result) => {
    if (result % 2) {
        return 'false';
    }
    return 'true';
});
console.log(answer_2);


//randomNumbers를 변경하지 말고 오름차순으로 정렬 하고 answer_3에 할당하라

let answer_3 = randomNumbers.sort(function(a, b) {
    return a - b;
});
console.log(answer_3);


//randomNumbers를 변경하지 말고 내림차순으로 정렬 하고 answer_4에 할당하라 

let answer_4 = randomNumbers.sort(function(a, b) {
    return b - a;
});
console.log(answer_4);

