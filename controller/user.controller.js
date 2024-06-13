const db = require('../db')

class Usercontroller {

    async createUser(req, res) {
        const { name, age } = req.body
        const newUser = await db.query(`INSERT INTO users(name, age) values ($1, $2) RETURNING*`, [name, age])
        res.json(newUser.rows[0])


    }

    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)

    }
    async getOneUser(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id=$1', [id])
        res.json(user.rows[0])
    }
    async updateUser(req, res) {
        const { id, name, age } = req.body
        const user = await db.query(
            'UPDATE users set name=$1, age=$2 where id=$3 RETURNING *', [name, age, id]
        )
        res.json(user.rows[0])

    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE  FROM users where id=$1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new Usercontroller()