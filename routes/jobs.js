import { Router } from 'express'
import * as jobCtrl from '../controllers/jobs.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', jobCtrl.index)
router.post('/', jobCtrl.create)
router.get('/:id', jobCtrl.show)
router.put('/:id', jobCtrl.update)
router.delete('/:id', jobCtrl.destroy)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
