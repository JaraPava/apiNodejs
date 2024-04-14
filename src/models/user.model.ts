import {Schema, model} from "mongoose";
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        email: { type: String, unique: true, requiered: [true, 'El email es requerido'] },
        username: { type: String, unique: true, requiered: [true, 'El username es requerido'] },
        password: { type: String, required: [true, "La contraseña es requerida"] },
        name: { firstname: { type: String, required: [true, "El primer nombre es requerida"] }, lastname: { type: String, required: [true, "Los apellidos son requeridos"] } },
        address: {
            city: { type: String, required: true },
            street: { type: String, required: true },
            number: { type: String, required: true },
            zipcode: { type: String, required: true },
        },
        phone: { type: String, required: [true, 'Telefono requerido'] }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

export const UserModel = model('user', UserSchema);