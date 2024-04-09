"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registeredProductModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const registeredProductSchema = new mongoose_1.default.Schema({
    title: { type: String, require: [true, 'Titulo requerido'] },
    userId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "users", required: true },
    price: { type: Number, required: [true, 'Precio requerido'] },
    description: { type: String, required: false },
    category: { type: String, required: false },
    image: { type: String, required: false },
    rating: { rate: { type: Number, required: false }, count: { type: Number, required: false } },
    dateCreated: { type: Date, default: Date.now }
}, {
    collection: "registeredProducts"
});
exports.registeredProductModel = mongoose_1.default.model('registeredProduct', registeredProductSchema);
