"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreById = void 0;
// const {httpClient} = require('../plugins');
const plugins_1 = require("../plugins");
//La promesa puede resolver o devolver un dato generico inclusive
//Indicamos que la promesa es de tipo string
const getStoreById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://fakestoreapi.com/products/${id}`;
    const product = yield plugins_1.httpClient.get(url);
    return product;
    //product:{rate, count}
});
exports.getStoreById = getStoreById;
