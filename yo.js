var timeLeft = 60;
var elem = document.getElementById('some_div');


function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = timeLeft + 's';
        timeLeft--;
    }
}

function doSomething() {
    alert("Time is OVER");
}

function makeid() {
    var result           = '';
    var characters       = 'ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() * charactersLength));
    var duo = document.getElementById('duo');
    duo.innerHTML=result;
 }
 
function startGame(){
    var timerId = setInterval(countdown, 1000);
    makeid();
}

var start = document.getElementById("start");
start.addEventListener("click",startGame);

