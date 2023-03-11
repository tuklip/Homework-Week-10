const user = require("../models/user.js")

class userRepository {

    static findUser = async (next) => {

        try {
            const data = await user.getUser(next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static finduserById = async (id, next) => {
        try {
            const data = await user.finduserById(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static createUser = async (params, next) => {
        try {
            const data = await user.createUser(params, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static updateUser = async (id,email,gender,password, role, next) => {
        try {
            const data = await user.updateUser(id,email,gender,password, role, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async (id, next) => {
        try {
            const data = await user.deleteUser(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userRepository;