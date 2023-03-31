// setInterval(() => {
//    document.getElementById('time').innerText = new Date();
// },1000);
setInterval(()=>{
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let yoil = date.getDay();
    let han_yoil = '';

    switch(yoil){
        case 0 :
            han_yoil='Sunday'
            break;
        case 1 :
            han_yoil='Monday'
            break;
        case 2 :
            han_yoil='Tuesday'
            break;
        case 3 :
            han_yoil='Wednsday'
            break;
        case 4 :
            han_yoil='Thursday'
            break;
        case 5 :
            han_yoil='Friday'
            break;
        case 6 :
            han_yoil='Saturday'
            break;
    }
    let time = document.getElementById('time');
    let time2 = document.getElementById('time2');
    let content = `${year}년${month}월${day}일(${han_yoil})${hours}시간${minutes}분${seconds}초`
    
    // 문자열로만 HTML태그가 웹페이지에 적용된다.
        time.innerHTML = `<h1>${content}</h1>`
    // 문자열로된 내용이 그대로 홈페이지에 적용된다.
        time2.innerText = `<h1>${content}</h1>`

    // HTML요소를 동적으로 생성
    let nowElement = document.createElement('h1')
    
    // 요소에 속성 추가
    nowElement.setAttribute('id','bigTime');
    
    // 
    nowElement.textContent = content;

    time2.appendChild(nowElement);
    let nowElementId = time2.getAttribute('id')
    console.log(nowElementId);
    
},1000)
