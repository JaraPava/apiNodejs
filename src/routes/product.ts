import {Router} from 'express';
import {getProduct, getProducts, postProduct, updateProduct, deleteProduct} from '../controllers/product'
import { checkJwt } from '../middleware/session';
const router = Router();

router.get('/:id',getProduct);
router.get('/',checkJwt,getProducts);
router.post('/',checkJwt,postProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

export {router};