"use strict"

const output = {
 home : (req, res)=>{
    res.render("home/index");
},

 login : (req, res) => {
    res.render("home/login");
}
}

const process = {
    login: (req, res) =>{
        console.log(req.body);
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};