// let arr = [];
// for(let i = 1; i <= 9; i++){
//     for(let j = 1; j <= 9; j++){
//         console.log([`${i} X ${j} = ${i*j}`])
//     }
// }
// console.table(arr);
let arr = [];
for ( let i = 0; i < 9;i++) {
    // arr[i] = []
    arr.push([])
    for (let j = 0; j <8;j++){
        let x = j+2;
        let y = i+1;
        arr[i][j] = `${x} X ${y} = ${x*y}`;
    }
}
console.table(arr);
