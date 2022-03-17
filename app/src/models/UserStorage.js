"use strict";

class UserStorage {
    //사용자 정보
    static _users = {
        id: ["a", "b", "c"],
        psword: ["aa", "bb", "cc"],
        name: ["김", "이", "박"]
    };

    static getUsers(...fields) {
        const users = this._users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this._users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
                newUser[info] = users[info][idx];
                return newUser;
            }
            // const userInfo = Object.keys(users).reduce((newUser, info) => {
            //     newUser[info] = users[info][idx];
            //     return newUser;
            // }
            , {});

        return userInfo;
    }
}

module.exports = UserStorage;