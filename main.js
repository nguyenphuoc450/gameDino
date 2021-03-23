let dino = document.querySelector('#dino');
let cacTus = document.querySelector('#cactus');
let btnPlay = document.querySelector('#play');
let score = 0;

window.addEventListener("keydown",function(event){
    if(event.key == "ArrowUp" || event.keyCode ==32)
    {
        jump();
    }
});

function jump() {
    if(dino.classList != 'animate-jump') {
        dino.classList.add('animate-jump');
    }
    setTimeout(function(){
        dino.classList.remove('animate-jump');
    },500);
}


let checkDead = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cacTusLeft = parseInt(window.getComputedStyle(cacTus).getPropertyValue("left"));
    if(cacTusLeft < 50 && dinoTop >= 150 ){
        cacTus.classList.remove('animate-cacTus');
        alert("bạn đã thua");
        btnPlay.style.display ='inline-block';
    }

}, 10);

let scoreUp = setInterval(function() {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cacTusLeft = parseInt(window.getComputedStyle(cacTus).getPropertyValue("left"));
    if(cacTusLeft < 50 && dinoTop <= 150 ){
        score++;
        document.querySelector('#score').innerHTML = `Điểm : ${score}`;
    }
},100);

btnPlay.addEventListener('click',function(event){
    btnPlay.style.display ='none';
    cacTus.classList.add('animate-cacTus');
    event.stopPropagation();
    score = 0;
    document.querySelector('#score').innerHTML = `Điểm : ${score}`;
});



