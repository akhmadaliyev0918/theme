let text = document.querySelector("p")
let container = document.querySelector(".container");
let bigbox = document.querySelector(".big-box");
let boxdown = document.querySelector(".box-down");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let boxdownp = document.querySelector(".box-down  p");
let btnDark = document.getElementById("btnDark");
let btnLight = document.getElementById("btnLight");
let lockdark = document.querySelector(".lock-black");
let locklight = document.querySelector(".lock-white");
let userdark = document.querySelector(".user-black");
let userlight = document.querySelector(".user-white");
let remem = document.querySelector(".remem");
let remem1 = document.querySelector(".remem1");
let remem2 = document.querySelector(".remem2");
let remem3 = document.querySelector(".remem3");
let inpemail = document.querySelector(".inpemail");
let textp2 = document.querySelector(".text-p2");
let login = document.querySelector(".login")

const Dark = () => {
    login.style.color = "white";
    container.style.backgroundColor = "#333";
    bigbox.style.backgroundColor = "black";
    boxdown.style.backgroundColor = "#242424";
    email.style.backgroundColor = "#545454";
    password.style.backgroundColor = "#545454";
    userdark.style.display = "none";
    userlight.style.display = "block";
    lockdark.style.display = "none";
    locklight.style.display = "block";
    text.style.color = "#fff";
    btnDark.style.display = "block"
    btnLight.style.display = "none";
    remem.style.color = "white";
    remem1.style.color = "white";
    remem2.style.color = "white";
    remem3.style.backgroundColor = "#c08bf7";
    remem3.style.color = "black";
    inpemail.style.color = "white";
    text.style.color = "white";
    textp2.style.color = "white";
}

const Light = () => {
    login.style.color = "black";
    container.style.backgroundColor = "#fff";
    boxdown.style.backgroundColor = "#fff";
    email.style.backgroundColor = "#e6e6e6";
    password.style.backgroundColor = "#e6e6e6";
    userdark.style.display = "block";
    textp2.style.color = "white";
    text.style.color = "black"
    userlight.style.display = "none";
    lockdark.style.display = "block";
    locklight.style.display = "none";
    text.style.color = "#000";
    bigbox.style.backgroundColor = "dodgerblue";
    btnLight.style.display = "block";
    btnDark.style.display = "none";
    remem.style.color = "black";
    remem1.style.color = "black";
    remem2.style.color = "black";
    remem3.style.backgroundColor = "dodgerblue";
    remem3.style.color = "white";
    inpemail.style.color = "black";
}