"use strict"



const output = {
 home : (req, res)=>{
    res.render("home/index");
},

 login : (req, res) => {
    res.render("home/login");
}
}

//사용자 정보
const users = {
    id:["a" ,"b", "c"],
    psword:["aa", "bb", "cc"]
};

//여기서 사용자 정보를 가지고 로그인
const process = {
    login: (req, res) =>{
        const id = req.body.id,
            psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인 실패",
        });
    }
}

//파일 밖에서 쓰기 위해 모듈을 빼줌
module.exports = {
    output,
    process
};