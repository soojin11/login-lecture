"use strict";


const UserStorage = require("./UserStorage");

class User {
    //생성자
    constructor(body) {
        this.body = body;
    }
    async login() {
        const client = this.body;
        try {
            const { id, paword } = await UserStorage.getUserInfo(client.id);
            if (id) {
                //여기서 계속 에러난 이유가 mysql에서 psword를 paword라고 씀
                console.log(paword);
                console.log(client.psword);
                //storage에서 가져온 정보 === client가 작성한 정보면
                if (id === client.id && paword === client.psword) {
                    return { success: true };
                    //이 반환값을 login으로ㅗ 보내
                }
                return { success: false, msg: "비밀번호가 틀렸습니다." };
            }
            return { success: false, msg: "존재하지 않는 아이디" };
        } catch (err) {
            return { success: false, msg: err };
        }


    }

    async register() {
        const client = this.body;
        try {
            const response = await UserStorage.save(client);
            return response;
        } catch (err) {
            return { success: false, msg: err };
        }
    }
}

module.exports = User;