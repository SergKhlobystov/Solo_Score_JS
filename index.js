let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function addOnehome() {
    homeScore.textContent = +homeScore.textContent  +1
}

function addTwohome() {
    homeScore.textContent = +homeScore.textContent  +2
}

function addThreehome() {
    homeScore.textContent = +homeScore.textContent  +3
}

function addOneguest() {
    guestScore.textContent = +guestScore.textContent  +1
}

function addTwoguest() {
    guestScore.textContent = +guestScore.textContent  +2
}

function addThreeguest() {
    guestScore.textContent = +guestScore.textContent  +3
}

function resetAll() {
    homeScore.textContent = 0
    guestScore.textContent = 0
}