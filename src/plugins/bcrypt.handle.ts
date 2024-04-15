import {hash, compare} from 'bcryptjs';

const encrypt = async(pass:string) =>{
    const passwordHash = await hash(pass, 8);// El hash pide la contraseña en texto plano y el segundo parametro es que tan random se le asignara la encriptación.
    return passwordHash;
};

const verified = async (pass:string, passHash:string) =>{
    const isCorrect = await compare(pass, passHash);
    return isCorrect;
};

export {encrypt, verified}