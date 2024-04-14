import {Request, Response} from 'express';
import { handleHttp } from '../plugins/error.handle';
import { addUserProduct } from '../services/product';

/*
* GET 
*/
const getProduct = (req:Request, res:Response) => {
    try {
        // console.log(req);
        res.send(req)
    } catch (error) {
        handleHttp(res,"ERROR_GET_PRODUCT");
    }
};

const getProducts = (req:Request, res:Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res,"ERROR_GET_PRODUCTS");
    }
};

const postProduct = async (req:Request, res:Response) => {
    try {
        const response = await addUserProduct(req.body);
        const data = response?response:"NOT_FOUND";
        res.send(data);
    } catch (error) {
        handleHttp(res,"ERROR_POST_PRODUCT");
    }
};

const updateProduct = (req:Request, res:Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res,"ERROR_PUT_PRODUCT");
    }
};

const deleteProduct = (req:Request, res:Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_PRODUCT");
    }
};

export {getProduct, getProducts, postProduct, updateProduct, deleteProduct}