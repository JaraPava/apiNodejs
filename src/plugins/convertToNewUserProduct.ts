import {ObjectId} from 'mongodb';
import mongoose from 'mongoose';
import { Category, NewUserProduct, Rating } from '../data/interfaces/products';



const parseTitle = (titleFromRequest:string):string =>{
    if(!isString(titleFromRequest)){
        throw new Error('Incorrect or missing title');
    }
    return titleFromRequest;
};

const parsePrice = (priceFromRequest:number):number =>{
    if(!isNumber(priceFromRequest)){
        throw new Error('Incorrect or missing price')
    }
    return priceFromRequest;
}

const parseDescription = (descriptionFromRequest: string):string=>{
    if(!isString){
        throw new Error('Incorrect or missig description');
    }
    return descriptionFromRequest;
};

const parseCategory = (categoryFromRequest:any):Category => {
    if(!(isString(categoryFromRequest) || isCategory(categoryFromRequest))){
        throw new Error('Incorrect or missing category')
    }

    return categoryFromRequest;
};

const parseImage = (imageFromRequest:string):string =>{
    if(!isString(imageFromRequest)){
        throw new Error('Incorrect or missing image');
    }
    return imageFromRequest;
};

const parseRating = (ratingFromRequest:any):Rating =>{
    if(!isRating(ratingFromRequest)){
        throw new Error('Incorrect or missing rating');
    }
    return ratingFromRequest;
};

const parseUserId = (userIdFromRequest:string):ObjectId =>{
    if(!isObjectId(userIdFromRequest)){
        throw new Error('Incorrect or missing userId')
    }

    const idConverted = new ObjectId(userIdFromRequest);
    return idConverted

}
const isString = (string:string):boolean =>{
    return typeof string === 'string';
};

const isNumber = (number:number):boolean=>{
    return typeof number === 'number';
};

// const isDate = (date: string):boolean =>{
//     return Boolean(Date.parse(date));
// };

const isCategory = (params:any):boolean =>{
    return Object.values(Category).includes(params);
};

const isRating = (obj:any):boolean =>{
    const ratingObj = obj as Rating;
    return typeof (ratingObj.rate && ratingObj.count) === 'number'
};

const isObjectId = (string:string):boolean =>{
    const obj = new ObjectId(string);
    
    return mongoose.isValidObjectId(obj);
}

export const toNewUserProduct = (object:any): NewUserProduct =>{
    const newUserProduct:NewUserProduct = {
        userId: parseUserId(object.userId),
        title: parseTitle(object.title),
        price: parsePrice(object.price),
        description: parseDescription(object.description),
        category: parseCategory(object.category),
        image: parseImage(object.image),
        rating: parseRating(object.rating),
        dateCreated: new Date().toDateString(),
    }
    return newUserProduct;
}