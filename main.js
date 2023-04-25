function time() {
    let now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString("en-US");
    setTimeout(time, 1000)
}

function date() {
    let now = new Date();
    document.getElementById("date").innerHTML = now.toDateString("en-US");
}


function main() {
    time();
    date();
}
