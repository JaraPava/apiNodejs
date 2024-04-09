import { ProductModel, userModel } from '../data/mongo';
import { Products } from '../data/interfaces/products.interface';
import { toObjectId } from '../plugins/convertObjectId.plugins';
// import { User } from '../data/interfaces/users.interface';

export const getAllProducts = async () =>{
    
    const allRegisteredProducts = await ProductModel.find();
    if(allRegisteredProducts.length > 0){
        return allRegisteredProducts
    }
    return undefined;
}

export const getAllProductsByUser = async (id:string):Promise<Products[]|undefined> =>{
    console.log('id para obtener los productos por usuarios -> ', id)
    var products:Products[] = []
    if(await existUser(id) && await existProductsByUser(id)){
            products = await ProductModel.find({userId:id});
            if(products.length > 0){
                return products;
            }
    }
    return undefined;
}

async function existUser(id:string):Promise<boolean>{
    const user = await userModel.findById({_id:toObjectId(id)});
    var existUser:boolean = false;
    (user != (null || undefined))?existUser=true:existUser 
    return existUser
}

async function existProductsByUser(idUser:string):Promise<boolean>{
    if(await existUser(idUser)){
        const products = await ProductModel.find({userId:idUser});
        if(products.length > 0){
            return true;
            // const product = products.find(p => p._id.toString() === idProduct);
            // if(product){
            // }
        }
    }

    return false
}

// async function getProductByUserAndProductId(idUser:string, idProduct:string):Promise<boolean>{
//     if(await existProductsByUser(idUser)){
//         const products = await ProductModel.find({userId:idUser});
//             const product = products.find(p => p._id.toString() === idProduct);
//             if(product){
//                 return true
//             }
//     }
//     return false
// }

export const addProductByUser = () => null

