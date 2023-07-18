snake = document.getElementById('snake')
hearts = document.getElementById('life-line');
apple = document.getElementById('apple');
banana = document.getElementById('banana');
papita = document.getElementById('papita');
angur = document.getElementById('angur');
scoreBoard = document.getElementById('score-board');

snakePos = 500;
snakePosTD = 300;

var life = 6;

score = 0;
r = 0
l = 0
t = 0
b = 0

appT = 0;
appL = 0;
anT = 0;
anL = 0;
bT = 0;
bL = 0;
pT = 0;
pL = 0;

// snake.addEventListener(onkeypress(screenLeft), leftArrowPress);
document.onkeydown = (e) => {
    e = e || window.event;
    if (e.keyCode === 38) {
        upArrowPress();
    } else if (e.keyCode === 40) {
        dowmArrowPress();
    } else if (e.keyCode === 37) {
        leftArrowPress();
    } else if (e.keyCode === 39) {
        rightArrowPress();
    }
};

function leftArrowPress(){
    clearInterval(r);
    clearInterval(l);
    clearInterval(t);
    clearInterval(b);
    l = setInterval(leftSide, 1);
    snake.src = "./image/snake/snakeL.png";
}
function rightArrowPress(){
    clearInterval(r);
    clearInterval(l);
    clearInterval(t);
    clearInterval(b);
    r = setInterval(rightSide, 1);
    snake.src = "./image/snake/snakeR.png";
}
function upArrowPress(){
    clearInterval(r);
    clearInterval(l);
    clearInterval(t);
    clearInterval(b);
    t = setInterval(topSide, 1);
    snake.src = "./image/snake/snakeT.png";
}
function dowmArrowPress(){
    clearInterval(r);
    clearInterval(l);
    clearInterval(t);
    clearInterval(b);
    b = setInterval(bottomSide, 1);
    snake.src = "./image/snake/snakeB.png";
}
function leftSide(){   
    snakePos--;
    if(snakePos < 5){
        snakePos = 0;
        clearInterval(l);
        lifeLineManager();
    }
    else if(snakePos < (appL-25) && (snakePosTD-25)<appT && (snakePosTD+70) >appT){
        appleShow();
        scoring();
    }
    else if(snakePos < (bL-25) && (snakePosTD-25)<bT && (snakePosTD+70) >bT){
        bananaShow()
        scoring();
    }
    else if(snakePos < (pL-25) && (snakePosTD-25)<pT && (snakePosTD+70) >pT){
        papitaShow()
        scoring();
    }
    else if(snakePos < (anL-25) && (snakePosTD-25)<anT && (snakePosTD+70) >anT){
        angurShow()
        scoring();
    }
    snake.style.left = snakePos+"px";
}
function rightSide() {
    snakePos++;
    if(snakePos > screen.availWidth-70){
        snakePos = screen.availWidth-70;
        clearInterval(r);
        lifeLineManager();
    }
    else if(snakePos > (appL-25) && (snakePosTD-25)<appT && (snakePosTD+70) >appT){
        appleShow();
        scoring();
    }
    else if(snakePos > (bL-25) && (snakePosTD-25)<bT && (snakePosTD+70) >bT){
        bananaShow()
        scoring();
    }
    else if(snakePos > (pL-25) && (snakePosTD-25)<pT && (snakePosTD+70) >pT){
        papitaShow()
        scoring();
    }
    else if(snakePos > (anL-25) && (snakePosTD-25)<anT && (snakePosTD+70) >anT){
        angurShow()
        scoring();
    }
    snake.style.left = snakePos+"px";
}
function topSide() {
    snakePosTD--;
    if(snakePosTD < 5){
        snakePosTD = 0;
        clearInterval(t);
        lifeLineManager();
    }
    else if(snakePosTD <  appT && (snakePos-25)<appL && (snakePos+70) >appL){
        appleShow();
        scoring();
    }
    else if(snakePosTD  < bT && (snakePos-25)<bL && (snakePos+70) >bL){
        bananaShow()
        scoring();
    }
    else if(snakePosTD  <  pT && (snakePos-25)<pL && (snakePos+70) >pL){
        papitaShow()
        scoring();
    }
    else if(snakePosTD  <  anT && (snakePos-25)<anL && (snakePos+70) >anL){
        angurShow()
        scoring();
    }
    snake.style.top = snakePosTD+"px";
}
function bottomSide() {
    snakePosTD++;
    if(snakePosTD > screen.availHeight-175){
        snakePosTD = screen.availHeight-175;
        clearInterval(b);
        lifeLineManager();
    }
    else if(snakePosTD >  (appT-25) && (snakePos-25)<appL && (snakePos+70) >appL){
        appleShow();
        scoring();
    }
    else if(snakePosTD > (bT-25) && (snakePos-25)<bL && (snakePos+70) >bL){
        bananaShow()
        scoring();
    }
    else if(snakePosTD >  (pT-25) && (snakePos-25)<pL && (snakePos+70) >pL){
        papitaShow()
        scoring();
    }
    else if(snakePosTD >  (anT-25) && (snakePos-25)<anL && (snakePos+70) >anL){
        angurShow()
        scoring();
    }
    snake.style.top = snakePosTD+"px";
}

function appleShow(){
    appT = 100+Math.ceil((Math.random()*500));
    appL = 100+Math.ceil((Math.random()*1000));
    apple.style.top = appT+"px";
    apple.style.left = appL+"px";    
}
function angurShow(){
    anT = 100+Math.ceil((Math.random()*500));
    anL = 100+Math.ceil((Math.random()*1000));
    angur.style.top = anT+"px";
    angur.style.left = anL+"px";
}

function bananaShow(){
    bT = 100+Math.ceil((Math.random()*500));
    bL = 100+Math.ceil((Math.random()*1000));
    banana.style.top = bT+"px";
    banana.style.left = bL+"px";
}

function papitaShow(){
    pT = 100+Math.ceil((Math.random()*500));
    pL = 100+Math.ceil((Math.random()*1000));
    papita.style.top = pT+"px";
    papita.style.left = pL+"px";
}

function fruitsShow(){
    appleShow();
    angurShow();
    bananaShow();
    papitaShow();
    lifeLineManager()
}

function scoring(){
    score++;
    scoreBoard.innerHTML = score;
}

function lifeLineManager(){
    life--;
    hearts.innerHTML = '';
    for(i=1; i<=life; i++){
        hearts.innerHTML += '<img src="./image/hearts.png"/>';
    }
    if(life<=0){
        Swal.fire({
            title: 'Game Over \nYour score is: '+score,
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff',
            backdrop: `
              rgb(0, 255, 255, 0.3)
              url(./image/snake/snakeR.png)
              left top
              no-repeat
            `
          })

        score = 0;
        life = 6;
        scoreBoard.innerHTML = "0"
        fruitsShow();
    }
}