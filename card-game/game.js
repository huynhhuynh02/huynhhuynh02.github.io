var arr = ['ahri.jpg','ashe.jpg','blitzcrank.jpg','jinx.jpg','leesin.jpg','nidalee.jpg'];
var double_arr = arr.concat(arr);
var check = 0;
var arr_check = [];
var currentElement = [];
var proccess = document.getElementById('proccess');
var getWidth = document.getElementById('process-wrapper').clientWidth;
var currentWith =parseInt(getWidth);
var totalTime = 0;
var widthSeconds = 0;
var score = 0;
var bgmusic = document.getElementById('bg-music');
var rightSound = document.getElementById('click-right');
var failSound = document.getElementById('click-fail');
var victorySound = document.getElementById('victory');
var defeatSound = document.getElementById('defeat');

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function selectLevel(element){
    var level = element.value;
    if(level==1){
        totalTime = 60;
       
    }else if(level==2){
        totalTime = 30;
    }
    else{
        totalTime = 20;
    }
    document.getElementById('selectLV').style.display = 'none';
    document.getElementsByTagName('body')[0].classList.remove('active');
    widthSeconds = parseInt(getWidth)/totalTime;
}
function loadScreen(element){
    var html = "";
    var data = shuffle(double_arr);
    data.forEach((element,index) => {
        html+=`<div class="col-2">
        <div class="card" onclick="checkData(this,'${element}','${index}')">
            <div class="front"></div>
            <div class="back" style="background-image:url('images/${element}')"></div>
        </div>
    </div>`;
    });
    document.getElementById(element).innerHTML = html;
}
function checkData(element,data,order){
    element.classList.add('active');
    currentElement.push(order);
    check++;
    arr_check.push(data);
    if(check>=2){
        if(currentElement[0]==currentElement[1]){
            check=0;
            arr_check.length=0;
            currentElement.length=0;
            setTimeout(function(){
                var cards = document.getElementsByClassName('card');
                for(let i =0; i< cards.length; i++){
                    cards[i].classList.remove('active');
                }
            },400);
        }else{
            if(arr_check[0]== arr_check[1]){
                rightSound.play();
                check =0;
                arr_check.length = 0;
                setTimeout(function(){
                    document.getElementsByClassName('card')[currentElement[0]].style.display='none';
                    document.getElementsByClassName('card')[currentElement[1]].style.display='none';
                    currentElement.length = 0;
                },400);
                console.log('true');
                score++;
                console.log(score);
                if(score==6){
                    clearInterval(timend);
                    vicTory();
                }
            }else{
                failSound.play();
                check =0;
                arr_check.length = 0;
                currentElement.length = 0;
                setTimeout(function(){
                   var cards = document.getElementsByClassName('card');
                   for(let i =0; i< cards.length; i++){
                       cards[i].classList.remove('active');
                   }
                },400);
                console.log('false');
            }
        }
        
    }
}

function gameOver(){
    bgmusic.pause();
    defeatSound.play();
    document.getElementsByTagName('body')[0].innerHTML= `<div class="gameover"><button id="gameStart">PLAY AGAIN</button></div>`;
    document.getElementById('gameStart').addEventListener('click',function(){
        gameStart();
    });
}
function vicTory(){
    bgmusic.pause();
    document.getElementsByTagName('body')[0].innerHTML= `<div class="victory"><button id="gameStart">CONTINUTE</button></div>`;
    document.getElementById('gameStart').addEventListener('click',function(){
        gameStart();
    });
}

function gameStart(){
    window.location = '';
}

function proccessBar(element){
    totalTime--;
    currentWith-=widthSeconds;
    element.style.width = currentWith+"px";
    
    bgmusic.play();
    if(totalTime==0){
        element.style.width = 0+"px";
        clearInterval(timend);
        bgmusic.pause();
        gameOver();
    }
    
}
loadScreen('loadCard');
var timend = setInterval(function(){
    proccessBar(proccess)
},1000);