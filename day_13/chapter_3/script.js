//객체 중괄호로 묶여있다.
/**
 * 자바스크립트 객체는 JSON이라고하는 형식으로 표현된다.
 * JSON(Java Script Object Notation)의 약자
 * 
 * key : value
 */
const STUDENT = [{
    "name":"Hector",
    "age":"30",
    "height":181,
    "job":"student",
    "main":"java script",
    "sub":"server",
},
{
    "name":"Nullzing",
    "age":"31",
    "height":161,
    "job":"student",
    "main":"java script",
    "sub":"client",
}]
// 변수명 , 키(key) 의 조합으로 값(value)를 얻을수 있다.
console.log(STUDENT[0].name);
console.log(STUDENT[0].age);
console.log(STUDENT[0].height);
console.log(STUDENT[0].job);
console.log(STUDENT[0].main);
console.log(STUDENT[0].sub);

console.log(STUDENT[1].name);
console.log(STUDENT[1].age);
console.log(STUDENT[1].height);
console.log(STUDENT[1].job);
console.log(STUDENT[1].main);
console.log(STUDENT[1].sub);

console.table(STUDENT);


// 키값 접근방법 2
console.log(STUDENT[0]['name']);

let asm = {}
loop_top : for(let i = 0; i < STUDENT.length;i++){
    let values = Object.values(STUDENT[i]);
    console.log(i);
    for(let j = 0; j < values.length; j++){
    if(values[j]==='Hector'){
        asm = STUDENT[i];
        break ;
        }
    }
}
console.log(asm);