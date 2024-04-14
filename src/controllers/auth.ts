import { Request, Response } from 'express';
import { registerNewUser } from '../services/auth';
// import { handleHttp } from '../plugins/error.handle';
const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body);
    console.log('Respuesta del responseUser ', responseUser)
    res.send(responseUser);

}

const loginCtrl = async (req: Request, res: Response) => {
    try {
        res.send(req)
    } catch (error) {

    }
}

export { registerCtrl, loginCtrl };