const Router = require('express') 
const router = new Router()
 
const userController = require('../controllers/users.controller')


router.post('/users',userController.createUser)
router.get('/users/:id', userController.getUser)
router.get('/users',userController.getAllUsers)
router.put('/users/',userController.editUser)
router.delete('/users/:id',userController.deleteUser)



module.exports = router