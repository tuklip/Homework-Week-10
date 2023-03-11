const pool = require("../config/config.js")

class movie {

    static getMovie = async (next) => {
        const findQuery = `
            SELECT
                *
            FROM movies;
        `

        try{
            const data = await pool.query(findQuery)

            return data.rows;
        } catch(err) {
            next(err)
        }  
    }

    static findById = async (id, next) => {
        const findQuery = `
        SELECT
            *
        FROM movies
            WHERE movies.id = $1
        `

        try {
            const data = await pool.query(findQuery, [id])

            if(data.rows.length === 0){
                next({name: "ErrorNotFound"})
            } else {
                return data.rows[0];
            }
        } catch (err) {
            next(err)
        }
    }

    static createMovie = async(params, next) => {
        try {
            const {id, title, genres, year} = params;
            const insertQuery = `
            INSERT INTO movies (id, title, genres, year)
            VALUES
                ($1, $2, $3, $4)
            RETURNING *;
            `
            const data = await pool.query(insertQuery, [id, title, genres, year]);
            return data.rows[0];
        } catch (err) {
            next(err);
        }
    }

    static updateMovie = async (req,next) =>{
        try {
            const {id} = req.params;
            const {title, genres, year} = req.body;

            const updatemovie = `
                UPDATE movies (id, title, genres, year)
                SET title = $2,
                    genres = $3,
                    year = $4
                WHERE movies.id = $1;
                `
            const data = await pool.query(updatemovie, [id, title, genres, year]);
            return data.rows[0];
        } catch (err) {
            next(err);
        }
    }

    static deleteMovie = async (id, next) =>{
        try {
            const deleteMovie =`
                DELETE FROM movies
                WHERE movies.id = $1;
            `
            const data = await pool.query(deleteMovie, [id]);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = movie;