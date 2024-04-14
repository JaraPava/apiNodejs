import {NextFunction, Request, Response} from 'express';

const logMiddleware = (req: Request, res:Response, next:NextFunction)=>{
    console.log('petición -> ',req.body)
    res.send('Contestando desde middleware, tu petición es la siguiente');
    next();
};

export {logMiddleware}