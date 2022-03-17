"use strict";


const UserStorage = require("./UserStorage");

class User {
    //생성자
    constructor(body) {
        this.body = body;
    }
    login() {
        const body = this.body;
        const { id, psword } = UserStorage.getUserInfo(body.id);
        if (id) {
            //storage에서 가져온 정보 === client가 작성한 정보면
            if (id === body.id && psword === body.psword) {
                return { success: true };
                //이 반환값을 login으로ㅗ 보내
            }
            return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디" }

    }
}

module.exports = User;