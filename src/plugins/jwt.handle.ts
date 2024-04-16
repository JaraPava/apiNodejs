import {decode, sign, verify} from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

//Cuando un usuario va a localhost:3000/auth/login y generamos el login en si, necesita un jwt
//Genera un token
const generateToken = async(id:ObjectId) => {
    const jwt = await sign({id}, JWT_SECRET, {expiresIn:"2h"});
    return jwt;
};

//Función que devuelve un jwtPayload
const verifyToken = (jwt:string) => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export {generateToken, verifyToken, decode }