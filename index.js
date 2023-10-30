let game = [];
let player = [];

let tBtns = ["yellow" , "pink" , "blue" , "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");

// starting game

document.addEventListener("keypress" , function(){
    if (started == false){
        started = true;

        levelUp();
    }
});

function levelUp() {

    player = [];

    level++;
    h3.innerText = `Level ${level}`;

    // random btn choose
    let random = Math.floor(Math.random() * 4);
    let ranColor = tBtns[random];

    game.push(ranColor);

    let ranBtn = document.querySelector(`.${ranColor}`);

    flash(ranBtn);
}

function check(idx) {
    if( player[idx] === game[idx]){
        if( player.length == game.length){
            setTimeout(levelUp , 500);
        }
    } else {
        h3.innerHTML = `Game Over ! Your score was <b>${level}</b> <br> Press any key to start again.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function () {
            document.querySelector("body").style.backgroundColor = "white";
        } , 150);

        reset();
    }
}

function Press() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");

    player.push(userColor);

    check(player.length - 1);
}

let allBtn = document.querySelectorAll(".btn");
for( tns of allBtn) {
    tns.addEventListener("click" , Press);
}

// Reset function

function reset() {
    started = false;
    game = [];
    user = [];
    level = 0;
}


// Flash function

function flash(btn){
    btn.classList.add("flash");
    setTimeout( function () {
        btn.classList.remove("flash");
    } , 150);
}

function userFlash(btn){
    btn.classList.add("red");
    setTimeout( function () {
        btn.classList.remove("red");
    } , 150);
}