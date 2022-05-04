import { Router } from 'express'
import * as productCtrl from '../controllers/products.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', productCtrl.getAllProducts)
router.post('/', productCtrl.createProduct)
router.get('/:id', productCtrl.getSingleProduct)
router.put('/:id', productCtrl.updateProduct)
router.delete('/:id', productCtrl.deleteProduct)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
