"use strict"

const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        logger.info(`GET / 200 "홈 화면으로 이동"`);
        res.render("home/index");
    },

    login: (req, res) => {
        logger.info(`GET / login 200 "로그인 화면으로 이동"`);
        res.render("home/login");
    },

    register: (req, res) => {
        logger.info(`GET / register 200 "회원가입 화면으로 이동"`);
        res.render("home/register")
    }
}



//여기서 사용자 정보를 가지고 로그인
const process = {
    //login 도 비동기
    login: async(req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        }
        log(response, url);
        //client한테 주는 것
        return res.status(url.status).json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        }
        log(response, url);
        return res.status(url.status).json(response);
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};


const log = (response, url) => {
    if (response.err) logger.error(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`);
    else logger.info(`${url.method} ${url.path} ${url.status} Response:  ${response.success} ${response.msg || ""}`);
}