const hourEl = document.querySelector('.hours');
const minuteEl = document.querySelector('.minutes');
const secondEl = document.querySelector('.seconds');
const ampmEl = document.querySelector('.period');

const daysEl = document.querySelector('.day-name');
const dateEl = document.querySelector('.day-number');
const monthsEl = document.querySelector('.month-name');
const yearsEl = document.querySelector('.year');

const formatSwitchBtn = document.querySelector('.format-switch-btn');

const dotMenuBtn = document.querySelector('.dot-menu-btn');
const dotMenu = document.querySelector('.dot-menu');



dotMenuBtn.addEventListener('click', () => {
    dotMenu.classList.toggle('active');
});

function showPopUp(){
    localStorage.setItem('alerted', 'true');
    alert('The Clock has been configured for 24-hour format, you can change it to 12-hour' +
        ' format by clicking on the button on the top right corner of the clock.');
}

function checkForPopUp() {
    if (localStorage.getItem('alerted') !== 'true') {
        showPopUp();
    }
}

checkForPopUp();

document.addEventListener('click', (e) => {
    if (e.target.id !== 'active-menu') {
        dotMenu.classList.remove('active');
    }
});

let formatValue;

formatSwitchBtn.addEventListener('click', () => {
    formatSwitchBtn.classList.toggle('active');
    
    formatValue = formatSwitchBtn.getAttribute('data-format');
    
    if (formatValue === '12') {
        formatSwitchBtn.setAttribute('data-format', '24');
    }else{
        formatSwitchBtn.setAttribute('data-format', '12');
    }
});

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
    
    if (formatValue === '12') {
        if (hour > 12) {
            hour = hour - 12;
            ampm = 'PM';
        }else if (hour === 0) {
            hour = 12;
            ampm = 'AM';
        }
    }else{
        ampm = '';
    }
    
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    
    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;
}

updateClock();