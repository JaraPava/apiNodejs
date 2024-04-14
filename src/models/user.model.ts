import {Schema, model} from "mongoose";
import { User } from "../interfaces/user";
// import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        username: { type: String, required:true},
        phone: { type: String }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

export const UserModel = model('users', UserSchema);