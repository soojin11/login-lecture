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

    static getUsers(...fields) {
        // const users = this._users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json").then((data) => {
                return this._getUserInfo(data, id);
            })
            .catch(console.error)

    }



    static save(userInfo) {
        // const users = this._users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage;