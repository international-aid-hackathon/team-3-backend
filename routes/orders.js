import { Router } from 'express'
import * as ordersCtrl from '../controllers/orders.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()

router.use(decodeUserFromToken);
router.get('/', checkAuth, ordersCtrl.index);
router.get('/:id', checkAuth, ordersCtrl.show);
router.post('/', checkAuth, ordersCtrl.create);
router.put('/:id', checkAuth, ordersCtrl.update);
router.delete('/:id', checkAuth, ordersCtrl.destroy);

// router.post('/:id/orders', checkAuth, ordersCtrl.createOrder)
// router.delete('/:id/orders/:orderId', checkAuth, ordersCtrl.deleteOrder)
// router.patch('/:id/orders/:orderId', checkAuth, ordersCtrl.updateOrder)



export { router }