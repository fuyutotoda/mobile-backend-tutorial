function switchPageToRide() {
    const sheed = Math.floor(Math.random() * 3);
    if (sheed == 0) {
        window.location.href = "./get-on.html"
    } else if (sheed == 2) {
        window.location.href = "./drop.html"
    } else {
        window.location.href = "./liing.html"
    }
}

function switchPageToRun() {
    const sheed = Math.floor(Math.random() * 3);
    if (sheed == 0) {
        window.location.href = "./running.html"
    } else if (sheed == 2) {
        window.location.href = "./drop.html"
    } else {
        window.location.href = "./liing.html"
    }
}