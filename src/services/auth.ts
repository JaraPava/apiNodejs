import { UserModel } from "../models/user.model";
// import { Auth } from '../interfaces/auth.interface';
import { User } from "../interfaces/user";

const registerNewUser = async({email, password, username, phone}:User) => {
    const checkIs = await UserModel.findOne({email});
    console.log('ChekIs -> ',checkIs);
    if(checkIs) return "ALREADY_USER"
    console.log('Vamos a crear un usuario');
    const registerNewUser = await UserModel.create({email, password, username, phone}).catch((error)=>error);
    return registerNewUser;
};

const loginUser = async () => {

};

export {registerNewUser, loginUser}