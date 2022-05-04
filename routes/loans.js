import { Router } from 'express'
import * as loanCtrl from '../controllers/loans.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', loanCtrl.getAllLoans)
router.post('/', loanCtrl.createLoan)
router.get('/:id', loanCtrl.getSingleLoan)
router.put('/:id', loanCtrl.updateLoan)
router.delete('/:id', loanCtrl.deleteLoan)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
