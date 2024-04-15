import { Request, Response } from 'express';
import { loginUser, registerNewUser } from '../services/auth';
// import { handleHttp } from '../plugins/error.handle';
const registerCtrl = async (req: Request, res: Response) => {
    const responseUser = await registerNewUser(req.body);
    console.log('Respuesta del responseUser ', responseUser)
    res.send(responseUser);

}

const loginCtrl = async ({body}: Request, res: Response) => {
    try {
        const {email, password} = body;
        const responseUser = await loginUser({email, password});
        if(responseUser === 'PASSWORD_INCORRECT'){
            res.status(403)
            res.send(responseUser);
        }else{
            res.send(responseUser);
        }
        res.send(responseUser);
    } catch (error) {

    }
}

export { registerCtrl, loginCtrl };