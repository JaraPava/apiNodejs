import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, unique: true, requiered: [true, 'El email es requerido'] },
        username: { type: String, unique: true, requiered: [true, 'El username es requerido'] },
        password: { type: String, required: [true, "La contraseña es requerida"] },
        name: { firstname: { type: String, required: [true, "El primer nombre es requerida"] }, lastname: { type: String, required: [true, "Los apellidos son requeridos"] } },
        address: {
            city: { type: String, required: false },
            street: { type: String, required: false },
            number: { type: String, required: false },
            zipcode: { type: String, required: false },
        },
        phone: { type: String, required: [true, 'Telefono requerido'] }
    },
    {
        timestamps: true,
        versionKey:false
    }
);

export const UserModel = mongoose.model('user', UserSchema);