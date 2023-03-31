('주사위 2개를 더해서 6이 나올수있는 조합구하기')
('Find a combination of two dice and get six')

for(let i = 1; i < 7; i++){
    for(let j = 1; j < 7; j++){
        if(i+j==6)
            console.log(`${i}+${j}=${6}`);  
    };
}