const { param } = require("../routers/user.js");
const UserService = require("../services/userservices.js")

class userController{

    static findUser = async (req, res, next) => {

        try {
            const data = await UserService.findUser(next);
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }

    static finduserById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await UserService.finduserById(id, next);
            if(data){
                res.status(200).json(data);
            } else {
                next({name: "ErrorNotFound"});
            }
        } catch (err) {
            next(err);
        }
    }

    static createUser = async(req, res, next) => {
        try {
            const params = req.body;

            const data = await UserService.createUser(params, next);
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static updateUser = async(req, res, next) => {
        try {
            const {id} = req.params;
            const {email, gender, password, role} = req.body;

            const data = await UserService.updateUser(id, email, gender, password, role, next);
            if(data){
                res.status(200).json({
                    message:"Update sukses",data
                });
            } else {
                next({name: "ErrorNotFound"})
            }
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async(req, res, next) => {
        try {
            const {id} = req.params;

            const data = await UserService.deleteUser(id,next);
            if(data){
                res.status(200).json({
                    message:"Delete sukses",data
                });
            } else {
                next({name: "ErrorNotFound"})
            }
        } catch (err) {
            next(err);
        }
    }
}

module.exports = userController;