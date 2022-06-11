let lft = 50;
let tp = 50;

let lft2 = 50;
let tp2 = 50;

let settClick = 0;
let shape1Click = 0;
let shape2Click = 0;

arr__top.onclick = function(){
    tp-=0.5;
    circle.style.top = tp + '%';
}

arr__bot.onclick = function(){
    tp+=0.5;
    circle.style.top = tp + '%';
}

arr__left.onclick = function(){
    lft-=0.25;
    circle.style.left = lft + '%';
}

arr__right.onclick = function(){
    lft+=0.25;
    circle.style.left = lft + '%';
}


document.body.onkeydown = function(e){
    if(e.keyCode == 38){
        tp-=0.5;
        circle.style.top = tp + '%';
        arr__top.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 40){
        tp+=0.5;
        circle.style.top = tp + '%';
        arr__bot.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 39){
        lft+=0.25;
        circle.style.left = lft + '%';
        arr__right.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 37){
        lft-=0.25;
        circle.style.left = lft + '%';
        arr__left.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 87){
        tp2-=0.5;
        circle2.style.top = tp2 + '%';
        arr__top.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 83){
        tp2+=0.5;
        circle2.style.top = tp2 + '%';
        arr__bot.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 68){
        lft2+=0.25;
        circle2.style.left = lft2 + '%';
        arr__right.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 65){
        lft2-=0.25;
        circle2.style.left = lft2 + '%';
        arr__left.style.backgroundColor = '#999'
        checkWinner();
    }
    if(e.keyCode == 27){
            if(settClick === 0){
            main__settings.style.display = 'flex';
            settClick = 1;
            }else{
            main__settings.style.display = 'none';
            settClick = 0;
        }
    }
    
}

document.body.onkeyup = function(e){
    if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
        arr__top.style.backgroundColor = '#fff';
        arr__bot.style.backgroundColor = '#fff';
        arr__left.style.backgroundColor = '#fff';
        arr__right.style.backgroundColor = '#fff';
    }
}


let lftTarget = Math.floor(Math.random()*100);
let tpTarget = Math.floor(Math.random()*100);

setInterval(function(){
    target.style.display = 'block';
    target.style.top = tpTarget + '%';
    target.style.left = lftTarget + '%';
},2000)




function checkWinner(){
    if(lft == lftTarget && tp == tpTarget){
        alert('green win');
    }else if(lft2 == lftTarget && tp2 == tpTarget){
        alert('blue win');
    }
}

function new1PlayerColor () {
   col__ic__play1.style.backgroundColor = inp__col1.value;
    
    let tr = circle.classList.contains("triangle");
    let cr = circle.classList.contains("circle");
    let hr = circle.classList.contains("heart");
    
    if(tr === true && cr === false && hr === false){
        circle.style.borderBottomColor = inp__col1.value;
    }else if(cr === true && tr === false && hr === false){
        circle.style.backgroundColor = inp__col1.value;
    }else if(hr === true && tr === false && cr === false){
        circle.style.backgroundColor = inp__col1.value;
    }
}

inp__col1.addEventListener('change', new1PlayerColor);

function new2PlayerColor () {
   col__ic__play2.style.backgroundColor = inp__col2.value;
    
    let tr = circle2.classList.contains("triangle2");
    let cr = circle2.classList.contains("circle2");
    
    if(tr === true && cr === false){
        circle2.style.borderBottomColor = inp__col2.value;
    }else if(cr === true && tr === false){
        circle2.style.backgroundColor = inp__col2.value;
    }
}

inp__col2.addEventListener('change', new2PlayerColor);

sett.onclick = function(){
    if(settClick === 0){
        main__settings.style.display = 'flex';
        settClick = 1;
    }else{
        main__settings.style.display = 'none';
        settClick = 0;
    }
}

shape1.onclick = function(){
    if(shape1Click === 0){
        shape1.innerText = 'Triangle';
        circle.classList.add('triangle');
        circle.classList.remove('circle');
        shape1Click = 1;
    }else if(shape1Click === 1){
        shape1.innerText = 'Heart';
        circle.classList.remove('triangle');
        circle.classList.add('heart');
        shape1Click = 2;
    }else{
        shape1.innerText = 'Circle';
        circle.classList.remove('heart');
        circle.classList.add('circle');
        shape1Click = 0;
    }
    
}

shape2.onclick = function(){
    if(shape2Click === 0){
        shape2.innerText = 'Triangle';
        circle2.classList.add('triangle2');
        circle2.classList.remove('circle2');
        shape2Click = 1;
    }else if(shape2Click === 1){
        shape2.innerText = 'Heart';
        circle2.classList.remove('triangle2');
        circle2.classList.add('heart2');
        shape2Click = 2;
    }else{
        shape2.innerText = 'Circle';
        circle2.classList.remove('heart2');
        circle2.classList.add('circle2');
        shape2Click = 0;
    }
    
}


























