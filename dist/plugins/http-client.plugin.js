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
exports.httpClientPlugin = void 0;
/*
    Se crea esta función llamada httpClientPlugin.
    Puede que se pueda exportar otra información de ese archivo, y que se tenga una unica exportación.
    El get recibe la url y en ese caso se hará el WRAPPER (ENVOLTORIO DE FETCH EN ESTE CASO), lo que me interesa es que cuando alguien use mi
    cliente http, yo recibo la url y regresaré el producto de la respuesta.
    Tomamos e
*/
exports.httpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield fetch(url);
        return yield resp.json();
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () { }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () { }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () { }),
};
