const hourEl = document.getElementById('hour');
const minuteEl = document.getElementById('minute');
const secondEl = document.getElementById('second');
const ampmEl = document.getElementById('ampm');

function updateClock() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let ampm = 'AM';

    if (hour > 12){
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

    setTimeout(updateClock, 1000);
}

updateClock();