window.addEventListener('load', onLoad);

let counter = 0;
let seconds = 0;
let timerState = 0;
function onLoad() {
    const plusBtn = document.getElementById('plusBtn');
    const minusBtn = document.getElementById('minusBtn');
    const timerBtn = document.getElementById('timerBtn');
    const clearCounterBtn = document.getElementById('clearCounterBtn');
    const clearTimerBtn = document.getElementById('clearTimerBtn');
    
    plusBtn.addEventListener('click', addOne);
    minusBtn.addEventListener('click', subOne);
    timerBtn.addEventListener('click', startStop);
    clearCounterBtn.addEventListener('click', () => {
        counter = 0;
        refreshView();
    });
    clearTimerBtn.addEventListener('click',  () => {
        seconds = 0;
        refreshTimer();
    });
}

function addOne() {
    counter++;
    refreshView();
}

function subOne() {
    counter--;
    refreshView();
}

function startStop() {
    timerState = timerState ? 0 : 1;
    const timerBtn = document.getElementById('timerBtn');
    timerBtn.textContent = timerState ? 'Stop' : 'Start';
    if (timerState) {
        timer_id = setInterval(incrementTimer, 1000);
    } else {
        clearInterval(timer_id);
    }
}

function incrementTimer() {
    if (timerState) {
        seconds++;
        refreshTimer();
    }
}
function refreshTimer () {
    const mins = Math.floor(seconds / 60);
    const secs = seconds >= 60 ? (seconds - (mins * 60)) : seconds;
    document.getElementById('timer').innerText = `${parseNumber(mins)}:${parseNumber(secs)}`;
}

function parseNumber(number) {
    return number >= 10 ? number : `0${number}`;
}

function refreshView() {
    const counterText = document.getElementById('counter')
    counterText.innerText = counter;
}