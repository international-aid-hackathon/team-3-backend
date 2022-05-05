import { Router } from 'express'
import * as jobCtrl from '../controllers/jobs.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', jobCtrl.index)
router.post('/:id', jobCtrl.create)
// router.get('/:id', jobCtrl.show)
router.get('/:id', jobCtrl.findByUser)
router.put('/:id', jobCtrl.update)
router.delete('/:id', jobCtrl.destroy)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/', checkAuth, jobCtrl.create)

export { router }
