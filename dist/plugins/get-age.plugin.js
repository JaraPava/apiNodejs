"use strict";
//Este archivo adapta los paquetes y ya tenemos listo nuestro controlador-adaptador
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAge = void 0;
const getAge = (birthdate) => {
    if (!birthdate)
        return new Error('birthdate is required');
    return new Date().getFullYear() - new Date(birthdate).getFullYear();
};
exports.getAge = getAge;
