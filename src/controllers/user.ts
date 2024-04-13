import {Request, Response} from 'express'
import { handleHttp } from '../plugins/error.handle';
const getUser = (req:Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_GET_USER")
    }
};

const getUsers = (req:Request, res: Response) => {
    try {
        console.log({req});
    } catch (error) {
        handleHttp(res, "ERROR_GET_USERS")
    }
};

const postUser = ({body}:Request, res: Response) => {
    try {
        console.log(body);
        res.send(body)
    } catch (error) {
        handleHttp(res, "ERROR_POST_USER")
    }
};

const updateUser = (req:Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_PUT_USER")
    }
};

const deleteUser = (req:Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_USER")
    }
};

export {getUser, getUsers, postUser, updateUser, deleteUser};