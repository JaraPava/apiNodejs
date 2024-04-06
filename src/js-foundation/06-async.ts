// const {httpClient} = require('../plugins');
import {httpClient} from '../plugins';

//La promesa puede resolver o devolver un dato generico inclusive
//Indicamos que la promesa es de tipo string
export const getStoreById = async (id: string|number):Promise<string> => {
    const url = `https://fakestoreapi.com/products/${id}`;
    const product = await httpClient.get(url);
    return product;
    //product:{rate, count}
};


