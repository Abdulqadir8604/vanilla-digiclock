const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.period');

const daysEl = document.querySelector('.day-name');
const dateEl = document.querySelector('.day-number');
const monthsEl = document.querySelector('.month-name');
const yearsEl = document.querySelector('.year');

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = 'AM';

    if (hour >= 12){
        hour -= 12;
        ampm = "PM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;

    setInterval(updateClock, 1000);
}

var date = new Date();
var dayNumber = date.getDate();
var year = date.getFullYear();
var dayName = date.toLocaleString('default', { weekday: 'long' });
var monthName = date.toLocaleString('default', { month: 'long' });

daysEl.innerText = dayName;
dateEl.innerText = dayNumber;
monthsEl.innerText = monthName;
yearsEl.innerText = year;


updateClock();