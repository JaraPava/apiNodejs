import { UserModel } from "../models/user.model";
// import { Auth } from '../interfaces/auth.interface';
import { User } from "../interfaces/user";
import { encrypt, verified } from "../plugins/bcrypt.handle";
import { Auth } from "../interfaces/auth";
import { generateToken } from "../plugins/jwt.handle";

const registerNewUser = async({email, password, username, phone}:User) => {
    const checkIs = await UserModel.findOne({email});
    if(checkIs) return "ALREADY_USER"
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({email, password:passHash, username, phone}).catch((error)=>error);
    return registerNewUser;
};

const loginUser = async ({email, password}:Auth) => {
    const checkIs = await UserModel.findOne({email});
    if(!checkIs) return "NOT_FOUND_USER"
    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);
    if(!isCorrect) return "PASSWORD_INCORRECT"
    const token = await generateToken(checkIs.email);
    const data = {tokenChiquin:token, user:checkIs};
    return data;
};

export {registerNewUser, loginUser}