import {NextFunction, Request, Response} from 'express';

const logMiddleware = (req: Request, res:Response, next:NextFunction)=>{
    res;
    const header = req.headers;
    const userAgent = header["user-agent"];
    console.log('User-Agent', userAgent);
    next();
};

export {logMiddleware}