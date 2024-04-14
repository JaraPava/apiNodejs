import {Request, Response} from 'express';
const registerCtrl = async(req:Request,res:Response) =>{
    try {
        
        res.send(req)
    } catch (error) {
        
    }
}

const loginCtrl = async(req:Request, res:Response) =>{
    try {
        
    } catch (error) {
        
    }
}

export {registerCtrl, loginCtrl};