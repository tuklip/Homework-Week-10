const UserRepository = require("../repositories/userrepository.js")

class UserService {

    static findUser = async (next) => {
        try {
            const data = await UserRepository.findUser(next);
            return data;
        } catch (err) {
            next(err)
        }
        
    }

    static finduserById = async (id, next) => {
        try {
            const data = await UserRepository.finduserById(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static createUser = async (params, next) => {
        try {
            const data = await UserRepository.createUser(params, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static updateUser = async (id,email,gender,password, role, next) => {
        try {
            const data = await UserRepository.updateUser(id,email,gender,password, role, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static deleteUser = async(id,next) => {
        try {
            const data = await UserRepository.deleteUser(id,next);
            return data;
        } catch (err) {
            next(err);
        }
    }

}

module.exports = UserService;