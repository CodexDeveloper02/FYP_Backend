import express from 'express'
import controller from '../controllers/UserController'

const router = express.Router()

router.post('/', controller.create);
router.get('/', controller.find);
router.put('/:id', controller.update);
router.delete('/:id', controller.Delete);

export default router;