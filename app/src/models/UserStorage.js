"use strict";

const fs = require("fs").promises;
class UserStorage {

    static _getUserInfo(data, id) {
        const users = JSON.parse(data);
        // const users = this._users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }

    static _getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isAll, ...fields) {
        return fs.readFile("./src/databases/users.json").then((data) => {
                return this._getUsers(data, isAll, fields);
            })
            .catch(console.error)
            // const users = this._users;

    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json").then((data) => {
                return this._getUserInfo(data, id);
            })
            .catch(console.error)

    }



    static async save(userInfo) {
        //getUsers안에 모든 데이터를 가져오고 싶으면 걍 true
        //여기서 기존에 있는 데이터를 가져오고
        const users = await this.getUsers(true);

        if (users.id.includes(userInfo.id)) {
            //이 에러가 Users.js의 register 함수에서 catch
            //new Error 하면 catch 될 때 object로 들어감
            //이렇게 하면 string
            throw "존재하는 아이디";
        }

        //새로운 데이터 json에 저장
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
}

module.exports = UserStorage;