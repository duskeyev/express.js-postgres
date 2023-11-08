const db = require('../db')


class UserController {
    async createUser(req,res) {
        const {username, email} = req.body
        const newUser = await db.query("insert into users(username,email) values ($1,$2) returning *", [username,email])
         
        res.json( newUser.rows[0] )
        
    }
    async getAllUsers(req,res) {
        const users = await db.query("select * from users")
        res.json(users.rows) 
         
    }
    async getUser(req,res) {
        const id = req.params.id
        const user = await db.query(`select * from users where (id=${id})`)
        res.json(user.rows[0] )
    }
    async editUser(req,res) {
        const {id,username,email} = req.body
        const editedUser = await db.query("update users set username=$1, email=$2 where id=$3 returning *", [username,email,id] )
        res.json(editedUser.rows[0])
    }
    async deleteUser(req,res) {
        const id = req.params.id
        const users = await db.query("delete from users where id=$1 returning *",[id])
        res.json(users )

    }
     
     
}


module.exports = new UserController