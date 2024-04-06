"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreById = void 0;
const getStoreById = (id) => {
    const url = `https://fakestoreapi.com/products/${id}`;
    return fetch(url)
        .then(res => res.json())
        // .then(()=>{throw new Error('Producto no existe :0')})
        .then(product => product.title);
};
exports.getStoreById = getStoreById;
// const getAllProducts = () => {
//     fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         // .then(()=>{throw new Error('Producto no existe :0')})
//         .then(json => console.log(json));
// }
// PROMESA NORMAL
/* const getStoreById = (id, callback) => {
    //En la versión 14 en adelante, ya tenemos la función fetch api

    const url = `https://fakestoreapi.com/products/${id}`;


    // El fetch es una promesa que tenemos:
    //     .then() -> Cuando la promesa sale bien
    //     .catch()-> Cacha algo cuando pasa algo mal
    //     .finally(); -> Se ejecuta cuando pase cuando un then o catch

    fetch(url).then((response) => {
        //El response tiene el response.json y este serializa la data que viene por ahí
        response.json().then((product) => {
            callback(product.title);
        })
    });
};
 */
