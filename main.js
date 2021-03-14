let dino = document.querySelector('#dino');
let cacTus = document.querySelector('#cactus');
let btnPlay = document.querySelector('#play');


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
    if(cacTusLeft <=10 && dinoTop >=150 ){
        cacTus.classList.remove('animate-cacTus');
        alert("bạn đã thua");
        btnPlay.style.display ='inline-block';
    }
}, 10);

btnPlay.addEventListener('click',function(event){
    btnPlay.style.display ='none';
    cacTus.classList.add('animate-cacTus');
    event.stopPropagation();
});

