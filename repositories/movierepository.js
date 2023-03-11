const movie = require("../models/movie.js")

class MovieRepository {

    static findMovie = async (next) => {

        try {
            const data = await movie.getMovie(next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static findById = async (id, next) => {
        try {
            const data = await movie.findById(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try {
            const data = await movie.createMovie(params, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async (id, title, genres, year, next) => {
        try {
            const data = await movie.updateMovie(id, title, genres, year, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static deleteMovie = async (id, next) => {
        try {
            const data = await movie.deleteMovie(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MovieRepository;