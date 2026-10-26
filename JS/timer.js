// WAP using setTimeout,setInterval and getElementById to create a timer which takes input from user in minutes and seconds
/*
let timeLeft = parseInt(document.getElementById("minutes").value) * 60 + parseInt(document.getElementById("seconds").value);
let timer;

function startTimer() {
    timer = setInterval(() => {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        timeLeft--;
    }, 1000);
}
function stopTimer() {
    clearInterval(timer);
}
function resetTimer() {
    clearInterval(timer);
    timeLeft = 15 * 60;
    document.getElementById("timer").innerText = "15:00";
}

let timer = setInterval(() => {
    timeLeft-=1;
    if(timeLeft==0){
        clearInterval(timer);
    }
    updateTimer();
},1000);
function updateTimer(){
    let sec=timeLeft%60;
    let min=Number.parseInt(timeLeft/60);
    document.getElementById("timer").innerText = min;

}
updateTimer();
*/

// WAP using EventListener to create a counter which counts the number of times a button is clicked and displays the count on the screen

let count=0;
let btn = document.getElementById("btn");
btn.addEventListener('click',()=>{
    count++; 
    document.getElementById("count").innerText=count;
})