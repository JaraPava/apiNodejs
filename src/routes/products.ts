import express from "express";
import { getAllProducts,getAllProductsByUser} from "../services/productsServices"; 
const router =express.Router();

router.get('/', async (_req, res)=>{
    console.log('Getting all products');
    const allProducts = await getAllProducts();

    return (allProducts != (undefined || null))
        ? res.send(allProducts)
        : res.sendStatus(404);
});

router.get('/:id', async (req, res)=>{
    const idCaptured = req.params.id;
    if(idCaptured.length != 24){
        res.status(400).send('Length invalid of Id, You should send me it with exactly 24 caracters of type string').end();
    }else{
        const allProductsUser = await getAllProductsByUser(idCaptured);
        (allProductsUser !=( null || undefined))
            ? res.send(allProductsUser)
            : res.status(400).send(`User with id ${idCaptured} not registered products yet.`).end();
    }
});

// router.get('/:id', (req, res)=>{
//     console.log('Esta llegando tu petición -> ', req.params.id);
//     res.send('hola');
// })
export default router;