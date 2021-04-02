new Promise((resolve, reject) => {
    throw new Error("에러 발생!");
}).catch(function(error) {
    console.log("에러가 잘 처리되었습니다. 정상적으로 실행이 이어집니다.");
}).then(() => console.log("다음 핸들러가 실행됩니다."));

new Promise((resolve, reject) => {
    throw new Error("에러 발생");
}).catch(function(error) {
    if (error instanceof URIError) {
        //에러처리
    }else{
        console.log("처리할 수 없는 에러");
        throw error;
    }
}).then(function() {

})catch(error => {
    console.log(`알 수 없는 에러가 발생함: ${error}`);
});