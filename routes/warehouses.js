import { Router } from 'express'
import * as warehouseCtrl from '../controllers/warehouses.js'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

/*---------- Public Routes ----------*/
router.get('/', warehouseCtrl.getAllWarehouses)
router.post('/', warehouseCtrl.createWarehouse)
router.get('/:id', warehouseCtrl.getSingleWarehouse)
router.put('/:id', warehouseCtrl.updateWarehouse)
router.delete('/:id', warehouseCtrl.deleteWarehouse)


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// router.post('/changePassword', checkAuth, authCtrl.changePassword)

export { router }
