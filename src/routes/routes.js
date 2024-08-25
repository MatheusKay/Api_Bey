const router = require('express')

const getPublicRoute = require('../controllers/UseController')
const registerUser = require('../controllers/users/createUser')
const loginUser = require('../controllers/users/loginUser')
const addProduct = require('../controllers/products/addProduct')
const checkToken = require('../controllers/CheckToken')
const routeUser = require('../controllers/users/routeUser')

const routes = router.Router()

// Open Route - Public Route

routes.get('/', getPublicRoute)
routes.post('/auth/register', registerUser)
routes.post('/auth/login', loginUser)

// Section Products

routes.post('/user/:id', checkToken, addProduct)

// Private Route

routes.get('/user/:id', checkToken, routeUser)

module.exports = routes