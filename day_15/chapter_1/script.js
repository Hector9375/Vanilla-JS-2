const BSS = [{
    "name": "Beaksul",
    "age": "1",
    "weight":"13kg",
    "height": "50",
    "birth": "10.1",
    "sex": "female"
},
{
    "name": "Som",
    "age": "5",
    "weight": "6kg",
    "height": "30",
    "birth": "2.14",
    "sex": "female"
}]
// function search_name(name){
//         for(const each of BSS){
//             if(each.name===name){
//                 console.log(each.name);
//                 console.log(each.age);
//                 console.log(each.weight);
//                 console.log(each.height);
//                 console.log(each.birth);
//                 console.log(each.sex);
//                 break;
//             }
//         }
//     }
    function search_name(){
    let name = document.getElementById('name').value;
    for(let i = 0; i < BSS.length;i++){
            if(BSS[i].name===name){
                console.log(BSS[i].name);
                console.log(BSS[i].age);
                console.log(BSS[i].weight);
                console.log(BSS[i].height);
                console.log(BSS[i].birth);
                console.log(BSS[i].sex);
            }
        }
    }
    function save(){
        let names = document.getElementById('names').value;
        let age = document.getElementById('age').value;
        let weight = document.getElementById('weight').value;
        let height = document.getElementById('height').value;
        let birth = document.getElementById('birth').value;
        let sex = document.getElementById('sex').value;    
            BSS.push({name:names,age:age,weight:weight,height:height,birth:birth,sex:sex});
    }
    console.log(BSS[1]);