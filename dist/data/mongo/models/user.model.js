"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
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
}, { collection: "users" });
exports.userModel = mongoose_1.default.model('user', userSchema);
