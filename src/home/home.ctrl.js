"use strict"

const home = (req, res)=>{
    res.render("home/index");
}

const login = (req, res) => {
    res.render("home/login");
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    home,
    login,
};