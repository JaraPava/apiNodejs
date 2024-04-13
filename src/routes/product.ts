import {Router} from 'express';
import {getProduct, getProducts, postProduct, updateProduct, deleteProduct} from '../controllers/product'
const router = Router();

router.get('/',getProduct);
router.get('/',getProducts);
router.post('/',postProduct);
router.put('/',updateProduct);
router.delete('/',deleteProduct);

export {router};