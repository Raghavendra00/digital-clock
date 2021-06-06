
function showTime() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    am_pm = "AM";

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    var currentTime = hour + ":" + min + ":" + sec + am_pm;

    document.getElementById("clock").innerHTML = currentTime;
}

function showdate() {
    var d = new Date();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var year = d.getFullYear();
    month = month < 10 ? "0" + month : month;
    day = day < 10 ? "0" + day : day;
    var currentdate = day + ":" + month + ":" + year;
    document.getElementById("date").innerHTML = currentdate;
}


