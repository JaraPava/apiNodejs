import { Request, Response } from 'express';
import { handleHttp } from '../plugins/error.handle';
import { addUserProduct, getAllProducts } from '../services/product';
import { JwtPayload } from 'jsonwebtoken';

interface RequestExt extends Request {
    user?: string | JwtPayload;
}

const getProduct = (req: RequestExt, res: Response) => {
    try {
        // console.log(req);
        res.send({
            data: "LLegando a la petición getProduct",
            user: req.user
        });
    } catch (error) {
        handleHttp(res, "ERROR_GET_PRODUCT");
    }
};

const getProducts = async(_req: Request, res: Response) => {
    try {
        console.log('Getting all products');
        const allProducts = await getAllProducts();
    
        (allProducts != (undefined || null))
            ? res.send(allProducts)
            : res.status(404).send('PRODUCTS_NOT_REGISTERED_YET');
    } catch (error) {
        handleHttp(res, "ERROR_GET_PRODUCTS");
    }
};

const postProduct = async (req: Request, res: Response) => {
    try {
        const response = await addUserProduct(req.body);
        const data = response ? response : "NOT_FOUND";
        res.send(data);
    } catch (error) {
        handleHttp(res, "ERROR_POST_PRODUCT");
    }
};

const updateProduct = (req: Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_PUT_PRODUCT");
    }
};

const deleteProduct = (req: Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_PRODUCT");
    }
};

export { getProduct, getProducts, postProduct, updateProduct, deleteProduct }