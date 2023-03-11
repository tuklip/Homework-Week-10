const MovieRepository = require("../repositories/movierepository")

class MovieService {

    static findMovie = async (next) => {
        try {
            const data = await MovieRepository.findMovie(next);
            return data;
        } catch (err) {
            next(err)
        }
        
    }

    static findById = async (id, next) => {
        try {
            const data = await MovieRepository.findById(id, next);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static createMovie = async (params, next) => {
        try {
            const data = await MovieRepository.createMovie(params, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static updateMovie = async (id, title, genres, year, next) => {
        try {
            const data = await MovieRepository.updateMovie(id, title , genres, year, next);
            return data;
        } catch (err) {
            next(err)
        }
    }

    static deleteMovie = async(id,next) => {
        try {
            const data = await MovieRepository.deleteMovie(id,next);
            return data;
        } catch (err) {
            next(err);
        }
    }

}

module.exports = MovieService;