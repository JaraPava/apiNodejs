import express from "express";
import { getAllProducts,getAllProductsByUser,getProductByUserAndProductId} from "../services/productsServices"; 
const router =express.Router();

router.get('/', async (_req, res)=>{
    console.log('Getting all products');
    const allProducts = await getAllProducts();

    return (allProducts != (undefined || null))
        ? res.send(allProducts)
        : res.sendStatus(404);
});

router.get('/:idUser', async (req, res)=>{
    const idCaptured = req.params.idUser;
    if(idCaptured.length != 24){
        res.status(400).send('Length invalid of Id, You should send me it with exactly 24 caracters of type string').end();
    }else{
        const allProductsUser = await getAllProductsByUser(idCaptured);
        (allProductsUser !=( null || undefined))
            ? res.send(allProductsUser)
            : res.status(400).send(`User with id ${idCaptured} not registered products yet.`).end();
    }
});

router.get('/:idUser/product/:idProduct', async (req, res)=>{
    const idUser = req.params.idUser;
    const idProduct = req.params.idProduct;

    if((idUser.length !=24 ) || ( idProduct.length!= 24)){
        res.status(400).send('Length invalid of Id, You should send me it with exactly 24 caracters of type string').end();
    }else{
        const userProduct = await getProductByUserAndProductId(idUser,idProduct);
        (userProduct !=( null || undefined))
            ? res.send(userProduct)
            : res.status(400).send(`User with id ${idUser} not registered this product yet.`).end();
    }

    console.log('llegando petición -> ', idUser)
    console.log('llegando petición del id del producto-> ', idProduct);
});
// router.get('/:id', (req, res)=>{
//     console.log('Esta llegando tu petición -> ', req.params.id);
//     res.send('hola');
// })
export default router;