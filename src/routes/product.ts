import {Router} from 'express';
import {getProduct, getProducts, postProduct, updateProduct, deleteProduct} from '../controllers/product'
import { logMiddleware } from '../middleware/log';
const router = Router();

router.get('/:id',logMiddleware,getProduct);
router.get('/',getProducts);
router.post('/',logMiddleware,postProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export {router};