const { param } = require("../routers/movie.js");
const MovieService = require("../services/movieservices.js")

class movieController{

    static findmovie = async (req, res, next) => {

        try {
            const data = await MovieService.findMovie(next);
            res.status(200).json(data);
        } catch (err) {
            next(err);
        }
    }

    static findById = async (req, res, next) => {
        try {
            const {id} = req.params;
            const data = await MovieService.findById(id, next);
            if(data){
                res.status(200).json(data);
            } else {
                next({name: "ErrorNotFound"});
            }
        } catch (err) {
            next(err);
        }
    }

    static createMovie = async(req, res, next) => {
        try {
            const params = req.body;

            const data = await MovieService.createMovie(params, next);
            res.status(201).json(data);
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async(req, res, next) => {
        try {
            const {id} = req.params;
            const {title, genres, year} = req.body;

            const data = await MovieService.updateMovie(id, title, genres, year, next);
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

    static deleteMovie = async(req, res, next) => {
        try {
            const {id} = req.params;

            const data = await MovieService.deleteMovie(id,next);
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

module.exports = movieController;