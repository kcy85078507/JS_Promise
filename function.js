// let user = {
//     name: "John",
//     age: 30,

//     sayHi() {
//         console.log(user.name);
//     }
// };


// let admin = user;
// user = null;
// admin.sayHi();

let user = {
    firstName: "Timo",
    sayHi(){
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user.sayHi();
// user.sayHi = function() {
//     console.log("안녕");
// };

// user = {
//     sayHi: function() {
//         console.log("Hello");
//     }
// };
// user.sayHi();
// // ---------------------------------------
// user = {
//     sayHi() {
//         console.log("안녕");
//     }
// };
// user.sayHi();



// *this란?
// 함수를 호출할 때 기존 매개변수로 인자값과 (암묵적으로) this인자가 함수의 내부로 전달된다.
// 이 this 인자는 기본적으로 자기 자신의 객체를 가르키는데 상황에 따라 조금씩 다르다.

// 1. 전역 공간(어떤 객체에도 속하지 않은 상태)
// console.log(this);
// window를 가르키게 된다.

// 2. 함수 내부
// var wName = "Im window";

// var wf = function f() {
//    console.log(this.wName);
//  }

// wf(); ---> Im window

// 3. 메소드
// 간단하게 객체가 가지고 있는 함수를 메소드라고 부른다. 메소드에서는 메소드를 호출한 객체가 this가 된다.
// 

// wf는 window객체에 속해있다고 생각하면 되기 때문에 wf함수 안의 this는 window객체를 가르킨다.

// apply
// 작성법 : fn.apply(thisArg, [argsArray])
// this 인자를 첫 번째 인자로 받고, 두 번째 인자로는 배열을 받음.

// call
// 작성법 : fn.call(thisArg[, arg1[, arg2[, ...]]])
// this 인자를 첫 번째 인자로 받고, 두 번째 인자부터는 배열이 아닌 각 인자로 받음.

// bind
// 작성법 : fn.bind(thisArg[, arg1[, arg2[, ...]]])
// call과 인자 작성법은 같으나, apply, call과 달리 바로 메소드가 실행되지 않음. thisArg를 바인딩하는 역할만 함.

// *바인딩(binding)이란?
// 프로그램의 기본 단위(예시 : 변수)에 해당 기본 단위가 가질 수 있는 속성 중에서 일부 필요한 속성만을 선택하여 연결해 주는 것을 말한다.