"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

function login(){
    console.log(id.value);

    const req = {
        id: id.value,
        psword: psword.value,
    }
    console.log(req);
}