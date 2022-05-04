import { Router } from 'express'
import * as authCtrl from '../controllers/auth.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', authCtrl.getAllUsers)
router.get('/:id', authCtrl.getSingleUser)
router.post('/signup', authCtrl.signup)
router.post('/login', authCtrl.login)

/*---------- Protected Routes ----------*/
router.use(decodeUserFromToken)
router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
