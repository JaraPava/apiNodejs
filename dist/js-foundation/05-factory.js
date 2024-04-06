"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMakePerson = void 0;
;
const buildMakePerson = ({ getUUID, getAge }) => {
    //Esta es la función para crear personas
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birdhdate: birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.buildMakePerson = buildMakePerson;
// console.log(john);
