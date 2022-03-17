"use strict"

const UserStorage = require("../../models/UserStorage")

const output = {
    home: (req, res) => {
        res.render("home/index");
    },

    login: (req, res) => {
        res.render("home/login");
    }
}



//여기서 사용자 정보를 가지고 로그인
const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
        // console.log(UserStorage.getUsers());
        const users = UserStorage.getUsers("id", "psword");
        const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = "로그인에 실패"
        return res.json(response);
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};