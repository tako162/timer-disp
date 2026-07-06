function twoDigit(num) {
    let ret;
    if (num < 10)
        ret = "0" + num;
    else
        ret = num;
    return ret;
}
function showClock() {
    let nowTime = new Date();
    let nowHour = twoDigit(nowTime.getHours());
    let nowMin = twoDigit(nowTime.getMinutes());
    let nowSec = twoDigit(nowTime.getSeconds());
    let msg = nowHour + ":" + nowMin + ":" + nowSec;
    const current = nowTime.getHours() * 60 + nowTime.getMinutes();
    document.getElementById("realtime").innerHTML = msg;
    if (current >= 7 * 60 + 46) {
        document.getElementById("timer-label").classList.add("glad-label");
        document.getElementById("timer-label").textContent = "◤◢◤遅刻確定◢◤◢";
        document.getElementById("realtime").classList.add("glad-timer");
    }
}
setInterval('showClock()', 1000);
function reloadIframe() {
    let iframes = document.getElementsByClassName('iframe');
    for (let i = 0; i < iframes.length; i++) {
        iframes[i].src = iframes[i].src;
        console.log("iframe reloaded" + i);
    }
}