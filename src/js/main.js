import "../css/style.scss";

let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

const formatDate = (time) => (time < 10 ? '0' : '') + time;

function getTime(){
    let currentTime = new Date();
    hrs.innerHTML = formatDate(currentTime.getHours())
    min.innerHTML = formatDate(currentTime.getMinutes())
    sec.innerHTML = formatDate(currentTime.getSeconds())
}

setInterval(getTime, 1000);




