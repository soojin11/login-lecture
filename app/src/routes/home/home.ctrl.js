"use strict"

const User = require("../../models/User");

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    },

    register: (req, res) => {
        res.render("home/register")
    }
}



//여기서 사용자 정보를 가지고 로그인
const process = {
    login: (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        console.log(response);
        //client한테 주는 것
        return res.json(response);
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};