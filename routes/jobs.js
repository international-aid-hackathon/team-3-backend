import { Router } from 'express'
import * as jobCtrl from '../controllers/jobs.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', jobCtrl.getAllJobs)
router.post('/', jobCtrl.createJob)
router.get('/:id', jobCtrl.getSingleJob)
router.put('/:id', jobCtrl.updateJob)
router.delete('/:id', jobCtrl.deleteJob)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
