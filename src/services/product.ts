
import { NewUserProduct} from '../interfaces/product.interface';
import { ProductModel } from '../models/product.model';
// import { toObjectId } from '../plugins/convertObjectId.plugins';
// import { ObjectId } from 'mongodb';

export const getAllProducts = async () => {

    const allRegisteredProducts = await ProductModel.find();
    if (allRegisteredProducts.length > 0) {
        return allRegisteredProducts
    }
    return undefined;
}

// export const getAllProductsByUser = async (id: string): Promise<Products[] | undefined> => {
//     var products: Products[] = []
//     if (await existUser(id) && await existProductsByUser(id)) {
//         products = await ProductModel.find({ userId: id });
//         if (products.length > 0) {
//             return products;
//         }
//     }
//     return undefined;
// }

// export const getProductByUserAndProductId = async (idUser: string, idProduct: string): Promise<Products | null> => {
//     if (await existUser(idUser) && await existProductsByUser(idUser) && await existProductByUserAndProductId(idUser, idProduct)) {
//         const products: Products | null = await ProductModel.findOne({ $and: [{ userId: idUser }, { _id: idProduct }] });
//         if (products != (null || undefined)) {
//             return products;
//         }
//     }
//     return null;
// }

export const addUserProduct = async (newUserProduct: NewUserProduct) => {
    const addedUserProduct = await ProductModel.create(newUserProduct);
    return addedUserProduct;
}

// async function existUser(id: string): Promise<boolean> {
//     const user = await userModel.findById({ _id: toObjectId(id) });
//     var existUser: boolean = false;
//     (user != (null || undefined)) ? existUser = true : existUser
//     return existUser
// }

// async function existProductsByUser(idUser: string): Promise<boolean> {
//     if (await existUser(idUser)) {
//         const products = await ProductModel.find({ userId: idUser });
//         if (products.length > 0) {
//             return true;
//         }
//     }
//     return false
// }

// async function existProductByUserAndProductId(idUser: string, idProduct: string): Promise<boolean> {
//     if (await existProductsByUser(idUser)) {
//         const products = await ProductModel.find({ $and: [{ userId: idUser }, { _id: idProduct }] });
//         const product = products.find(p => p._id.toString() === idProduct);
//         if (product) {
//             return true
//         }
//     }
//     return false
// };

// export const addProductByUser = () => null

