"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
//UUUID fue escrita en javascript, entonces tenemos que instalar el uuid en la contraparte de @types => ctrl + .
// HAY QUE TENER MUY EN CUENTA QUE LOS TYPES EN LAS DEPENDENCIAS SOLAMENTE DEBEN ESTAR EN DEVDEPENDENCIES
const uuid_1 = require("uuid");
const getUUID = () => {
    return (0, uuid_1.v4)();
};
exports.getUUID = getUUID;
