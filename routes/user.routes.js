const Router = require('express')
const router = new Router()
const usercontroller = require('../controller/user.controller')

router.post('/user', usercontroller.createUser)
router.get('/user', usercontroller.getUsers)
router.get('/user/:id', usercontroller.getOneUser)
router.put('/user/:id', usercontroller.updateUser)
router.delete('/user/:id', usercontroller.deleteUser)




module.exports = router