let timerDisplay = document.querySelector('.timerDisplay');
let start = document.getElementById('startBtn');
let stop = document.getElementById('stopBtn');
let Reset = document.getElementById('resetBtn');

let msec =00;
let secs =00;
let mins =00;

let timerId = null; 

startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec=secs=mins=0;
});

function startTimer() {
    msec++; 
    if (msec == 100) {
        msec = 0;
        secs++;
        if (secs == 60) {
            secs = 0;
            mins++;
        }  
    } 
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secString = secs < 10 ? `0${secs}` : secs;
    let minString = mins < 10 ? `0${mins}` : mins; 

    timerDisplay.innerHTML= `${minString} : ${secString} : ${msecString}`;
}
