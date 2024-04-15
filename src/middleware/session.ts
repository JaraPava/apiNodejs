import { NextFunction, Request, Response } from 'express';
import { verifyToken} from '../plugins/jwt.handle';
import {JwtPayload} from 'jsonwebtoken'
interface RequestExt extends Request {
    user?: string|JwtPayload;
}

//Extendemos de Request y le agregamos el user de tipo string o JwtPayload
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        
        //Obtenemos el JWT ->  El json web token se pasa en el encabezado y en el encabezado debe tener el authorization
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop(); // ['Bearear','Algo'] -> retorna el algo
        const isUser = verifyToken(`${jwt}`); //Transforma el jwt a string, colocando el apostrofe invertido
        //Si esto nos retorna un false podría ser que ya se vencio el token, el usuario no este pasando
        //token y el usuario esta pasando el token de manera incorrecta y pare de enviar las cosas
        if (!isUser) {
            res.status(401);
            res.send('NO_TIENES_UN_JWT_VALIDO');
        } else {
            //1. Creamos un interface llamada RequestExt que extiende de Request
            req.user = isUser;
            // console.log({ jwtByUser });
            next();

        }


    } catch (error) {
        // console.log('Error', error)
        res.status(400)
        res.send('SESSION_NOT_VALIDATE')
    }
}

export { checkJwt };