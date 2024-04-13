import {Request, Response} from 'express';
import { handleHttp } from '../plugins/error.handle';

const getProduct = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_GET_PRODUCT");
    }
};

const getProducts = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_GET_PRODUCTS");
    }
};

const postProduct = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_POST_PRODUCT");
    }
};

const updateProduct = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_PUT_PRODUCT");
    }
};

const deleteProduct = (req:Request, res:Response) => {
    try {
        
    } catch (error) {
        handleHttp(res,"ERROR_DELETE_PRODUCT");
    }
};
