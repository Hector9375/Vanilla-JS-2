// let gugudans = [];
// for ( let i = 0; i < 9;i++) {
//     gugudans[i] = [];
//     for (let j = 0; j <8;j++){
//         let x = j+2;
//         let y = i+1;
//         gugudans[i][j] = `${x} X ${y}=${x*y}`;
//     }
// }
// let gugu = document.getElementById('answer');
// let gugudan = document.createElement('answer')
// gugudans.innerHtml = `<h1>${gugudans}</h1>`

// console.log(gugu);
// console.log(gugudans);
// console.log(gugudan);
// (function (){console.log(gugudan)})();

function gugudan(number){
    let answer = document.getElementById('answer');
    answer.innerText = '';
    for(let i = 1; i<=9; i++){
        let line = document.createElement('p');
        line.textContent += `${number} X ${i} = ${number*i}`
        answer.appendChild(line); 
    }
}