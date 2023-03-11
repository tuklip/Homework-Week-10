const pool = require("../config/config.js")

class user {

    static getUser = async (next) => {
        const findQuery = `
            SELECT
                *
            FROM users;
        `

        try{
            const data = await pool.query(findQuery)

            return data.rows;
        } catch(err) {
            next(err)
        }  
    }

    static finduserById = async (id, next) => {
        const findQuery = `
        SELECT
            *
        FROM users
            WHERE users.id = $1
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

    static createUser = async(params, next) => {
        try {
            const {id, email, gender, password, role} = params;
            const insertQuery = `
            INSERT INTO users (id, email, gender, password, role)
            VALUES
                ($1, $2, $3, $4, $5)
            RETURNING *;
            `
            const data = await pool.query(insertQuery, [id, email, gender, password, role]);
            return data.rows[0];
        } catch (err) {
            next(err);
        }
    }

    static updateUser = async(params, next) => {
        try {
            const {id} = req.params;
            const {email, gender, password, role} = req.body;

            const updateUser = `
                UPDATE users (email, gender, password, role, id)
                SET email = $1,
                    gender = $2,
                    password = $3.
                    role = $4
                WHERE users.id = $5;
                `
            const data = await pool.query(updateUser, [email, gender, password, role, id]);
            return data;
        } catch (err) {
            next(err);
        }
    }

    static deleteUser = async (id, next) =>{
        try {
            const deleteUser =`
                DELETE FROM users
                WHERE users.id = $1;
            `
            const data = await pool.query(deleteUser, [id]);
            return data;
        } catch (err) {
            next(err);
        }
    }
}

module.exports = user;