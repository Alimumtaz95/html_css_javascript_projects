function startClock() {
    const now = new Date();
    let hours = now.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    let seconds = now.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    const display = document.getElementById("clock-display");
    display.textContent = hours + ":" + minutes + ":" + seconds;
}

setInterval(startClock, 1000);
