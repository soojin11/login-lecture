"use strict";

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector('#confirm-psword'),
    registerBtn = document.querySelector("#button")

registerBtn.addEventListener("click", register);

function register() {
    //전달 할 데이터
    if (!id.value) {
        return alert("아이디 입력해주세요")
    }
    if (psword.value !== confirmPsword.value) {
        return alert("비밀번호 일치하지 않습니다");
    }
    const req = {
        id: id.value,
        name: name.value,
        psword: psword.value,
    }

    // fetch로 전달
    // 경로 지정
    // stringify하는 이유 : 문자열로 전달하기 위해
    // body를 통해 전달하는 경우 method : "POST"
    // 내가 전달하는 형식이 json이라는 것을 알려주기 위해 headers에 작성
    // post라는 method로 받을 수 있는 경로가 있어야 함(index.js)
    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(req),
    }).then((res) => res.json()).then((res) => {
        if (res.success) {
            location.href = "/login";
        } else {
            if (res.err) return alert(res.err);
            alert(res.msg);
        }
    }).catch((err) => {
        console.error(new Error("회원가입 중 에러 발생"));
    });


}