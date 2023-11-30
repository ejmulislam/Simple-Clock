const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const progress = document.getElementById('progress');
const meridian = document.getElementById('meridian');

function getTimes() {
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    if (hr > 12) {
        hr = hr - 12;
        meridian.textContent = 'PM';
    }

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec / 60) * 100 + '%';
}

setInterval(getTimes, 1000);