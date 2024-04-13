import {Request, Response} from 'express';
import { handleHttp } from '../plugins/error.handle';

/*
* GET 
*/
const getProduct = (req:Request, res:Response) => {
    try {
        console.log(req);
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

const postProduct = (req:Request, res:Response) => {
    try {
        console.log(req.body);
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