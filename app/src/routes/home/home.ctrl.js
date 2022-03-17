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
    //login 도 비동기
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        console.log(response);
        //client한테 주는 것
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
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