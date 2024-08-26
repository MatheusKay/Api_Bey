const router = require('express')

const getPublicRoute = require('../controllers/UseController')
const registerUser = require('../controllers/users/createUser')
const loginUser = require('../controllers/users/loginUser')

const bank = require('../controllers/sections/bank')
const expenses = require('../controllers/sections/expenses')
const planning = require('../controllers/sections/planningTable')
const objectives = require('../controllers/sections/objectives')

const checkToken = require('../controllers/CheckToken')
const routeUser = require('../controllers/users/routeUser')

const routes = router.Router()

// Open Route - Public Route

routes.get('/', getPublicRoute)
routes.post('/auth/register', registerUser)
routes.post('/auth/login', loginUser)

// Section

routes.post('/bank/:id', checkToken, bank)
routes.post('/expenses/:id', checkToken, expenses)
routes.post('/planning/:id', checkToken, planning)
routes.post('/objetives/:id', checkToken, objectives)

// Private Route

routes.get('/user/:id', checkToken, routeUser)

module.exports = routes