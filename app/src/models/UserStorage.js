"use strict";

class UserStorage {
    static #users = {
        id: ["woorimIT", "test1", "test2"],
        psword: ["1234", "1234", "123456"],
        name: ["test1", "test2", "test3"],
    }

    static getUsers(...fileds) {
        const users = this.#users;
        const newUsers = fileds.reduce((newUsers, fileds) => {
            if (users.hasOwnProperty(fileds)) {
                newUsers[fileds] = users[fileds];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        return { success: true };
    }
}

module.exports = UserStorage