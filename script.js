const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.period');

const daysEl = document.querySelector('.day-name');
const dateEl = document.querySelector('.day-number');
const monthsEl = document.querySelector('.month-name');
const yearsEl = document.querySelector('.year');

const formatRadios = document.querySelectorAll('input[name="format"]');

let twelveHourFormat = true;

function updateClock() {

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = 'AM';
    
    showClock(hour, minute, second, ampm);

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

function showClock(hour, minute, second, ampm) {
    window.onload = function() {
        document.getElementById('twelveHourFormat').checked = true;
    }
    
    formatRadios.forEach((radio) => {
        if (radio.checked) {
            if (radio.value === '12') {
                ampm = hour >= 12 ? 'PM' : 'AM';
                hour = hour % 12 || 12;
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
            } else {
                hour = hour < 10 ? "0" + hour : hour;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
                ampm = '';
            }
            hourEl.innerText = hour;
            minuteEl.innerText = minute;
            secondEl.innerText = second;
            ampmEl.innerText = ampm;
        }
    });
}

updateClock();