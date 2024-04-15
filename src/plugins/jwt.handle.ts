import {sign, verify} from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET || "token.01010101"

//Cuando un usuario va a localhost:3000/auth/login y generamos el login en si, necesita un jwt
//Genera un token
const generateToken = async(id:string) => {
    const jwt = await sign({id}, JWT_SECRET, {expiresIn:"2h"});
    return jwt;
};

//Función que devuelve true si el jwt es un jwt valido 
const verifyToken = (jwt:string) =>{
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
};

export {generateToken, verifyToken }