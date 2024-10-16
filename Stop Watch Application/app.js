

let minHeading = 0;
let secHeading = 0;
let msecHeading = 0;
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");
let interval;
function start() {
    document.getElementById("myBtn").disabled = true;
    interval = setInterval(function () {
        msecHeading++;
        msec.innerHTML = msecHeading;
        if (msecHeading >= 100) {
            secHeading++;
            sec.innerHTML = secHeading;
            msecHeading = 0
        }
        else if (secHeading >= 60) {
            minHeading++;
            min.innerHTML = minHeading;
            secHeading = 0;
        }
    }, 10)
}

function stop() {
    clearInterval(interval)
}

function reset() {
    minHeading = 0;
    min.innerHTML = minHeading;
    secHeading = 0;
    sec.innerHTML = secHeading;
    msecHeading = 0;
    msec.innerHTML = msecHeading;
    clearInterval(interval)
}