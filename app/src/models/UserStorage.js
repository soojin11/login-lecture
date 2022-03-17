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
}

module.exports = UserStorage;