import { Request, Response } from 'express';
import { handleHttp } from '../plugins/error.handle';
import { getAllUsers, getUserById } from '../services/user';

const getUser = async (req: Request, res: Response) => {
    try {
        const userFound = await getUserById(req.params.id);
        (userFound != (undefined || null))
            ? res.send(userFound)
            : res.status(404).send('USER_NOT_FOUND');
    } catch (error) {
        handleHttp(res, "ERROR_GET_USER")
    }
};

const getUsers = async (_req: Request, res: Response) => {
    try {
        const responseUser = await getAllUsers();
        (responseUser != (undefined || null))
            ? res.send(responseUser)
            : res.status(404).send('NOT_USERS_REGISTERED_YET');
    } catch (error) {
        handleHttp(res, "ERROR_GET_USERS")
    }
};

const updateUser = (req: Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_PUT_USER")
    }
};

const deleteUser = (req: Request, res: Response) => {
    try {
        console.log(req);
    } catch (error) {
        handleHttp(res, "ERROR_DELETE_USER")
    }
};

export { getUser, getUsers, updateUser, deleteUser };