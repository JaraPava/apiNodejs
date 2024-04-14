import { Request, Response } from 'express';
import { registerNewUser } from '../services/auth';
const registerCtrl = async (req: Request, res: Response) => {
    try {
        const responseUser = await registerNewUser();
        console.log(responseUser)
        res.send(req)
    } catch (error) {

    }
}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        res.send(req)
    } catch (error) {

    }
}

export { registerCtrl, loginCtrl };