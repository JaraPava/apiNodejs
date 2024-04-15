import {Router} from 'express';
import {getProduct, getProducts, postProduct, updateProduct, deleteProduct} from '../controllers/product'
import { logMiddleware } from '../middleware/log';
import { checkJwt } from '../middleware/session';
const router = Router();

router.get('/',checkJwt,getProduct);
router.get('/:id',getProducts);
router.post('/',logMiddleware,postProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export {router};