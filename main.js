function time() {
    let now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString("en-US");
    setTimeout(time, 1000)
}

function date() {
    let now = new Date();
    document.getElementById("date").innerHTML = now.toDateString("en-US");
}

function weather( town ) {
    fetch("https://wttr.in/" + town + "?format=%c+%t")
        .then(response => response.text())
        .then(text => {
            document.getElementById("weather").innerHTML = text;
        })
}


function main() {
    time();
    date();
    weather("Indio");
}
