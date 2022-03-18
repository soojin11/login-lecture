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
        if (response.err) logger.error(`GET / login 200 200 Response: "success: ${response.success}, msg: ${response.err}"`);
        else logger.info(`GET / login 200 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        //client한테 주는 것
        return res.json(response);
    },
    register: async(req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        if (response.err) logger.error(`GET / register 200 200 Response: "success: ${response.success}, msg: ${response.err}"`);
        else logger.info(`GET / register 200 200 Response: "success: ${response.success}, msg: ${response.msg}"`);
        console.log(response);
        return res.json(response);
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};