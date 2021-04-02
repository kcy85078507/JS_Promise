// stack은 일상생활에서 물건을 쌓는 행위와 같다.

// Property
// top: top은 말 그대로 stack에 가장 위에 쌓여있는 데이터를 나타낸다. 정확히는 데이터의 위치(index) 값이다.
// maxSize: maxSize는 해당 저장소의 최대 크기를 나타낸다.
// stackArray: stackArray는 해당 저장소 자체이다.

// method / 스택 설계
// push() : push()는 배열(Array) 메소드로 배열의 가장 뒤에 값을 추가시키는 메소드
// pop() : pop() 또한 배열(Array) 메소드로 push()와는 반대로 배열의 가장 뒤의 값을 삭제하는 메소드입니다. pop()으로 꺼낸 값은 출력하거나 다른 곳에 할당할 수 있다.
// empty() : empty()는 저장소가 비어있는지 확인합니다. 저장소의 비움 여부에 따라 boolean(true/false)으로 값을 반환
// size() : size()는 현재 저장소에 저장되어있는 데이터가 몇 개 인지 체크
// 데이터 검색(find)
// 데이터 보기(show)

// Queue는 가장 최근에 쌓아올린 동전(즉, 맨 위의 동전)부터 하나씩 꺼낼 수 있다. 선입선출, (Last In, First Out)

// property
// front : 가장 먼저 들어온 데이터의 위치(index)를 나타낸다.
// rear: 새로운 데이터가 들어갈 위치(index)를 나타낸다.
// queueArray: Queue 저장소를 나타낸다.

// method
// push(): queue도 stack과 동일하게 가장 마지막의 위치에 데이터가 쌓이기 때문에 push()를 사용한다.
// shift(): shift()메소드는 배열의 가장 앞에 있는 값을 삭제하는 메소드다. 데이터를 꺼내는 위치만 다를 뿐 pop()메소드와 동일하게 다른 곳에 꺼낸 값을 출력하거나 할당할 수 있다.
// empty: empty()는 저장소가 비어있는지 확인한다.
// size: size()는 현재 저장소에 저장되어있는 데이터가 몇개인지 체크한다.


// function Stack(max_size){

// const size = max_size;
// let top = 0;
// let array = [];

// return{
//     pop(){
//         if(top===0){
//             console.log("stack is empty");
//         }else{
//             let temp = array[top];
//             top--;
//             return temp;
//         }
//     },

//     push(item){
//         if(size > top){
//             top++;
//             return array[top] = item;
//         }else{
//             console.log(new Error("stack is full"));
//         }
//     },
//     peek(){
//         return array[top];
//     }
// }
// }

// var a = Stack(5);
// a.push(1)
// a.push(2)
// a.push(3)
// a.push(4)
// a.push(5)
// a.push(5)
// console.log(a.pop())//5
// console.log(a.pop())//4
// console.log(a.pop())//3
// console.log(a.pop())//2
// console.log(a.peek())//1

// var MYAPP = {}
//     MYAPP.calculator = {
//         'left' : null,
//         'right' : null
//     }
// MYAPP.coordinate = {
//     'left' : null,
//     'right' : null
// }

// MYAPP.calculator.left = 10;
// MYAPP.calculator.right = 20;
// function sum(){
//     return MYAPP.calculator.left + MYAPP.calculator.right;
// }
// console.log(sum());