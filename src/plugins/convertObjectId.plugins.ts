import {ObjectId} from 'mongodb';

export const toObjectId = (id:string):ObjectId =>{
    const idConverted = new ObjectId(id.trim());
    return idConverted
}
