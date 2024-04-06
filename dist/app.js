"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const mongo_1 = require("./data/mongo");
main().catch(err => console.log(err));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield mongoose.connect('mongodb://127.0.0.1:27017/store');
        console.log('connected succesful');
        //#region get all products
        //Obtener todos los productos de la colección Products de la base de datos de Mongodb
        // const allRegisteredProducts = await registeredProductModel.find();
        // if(allRegisteredProducts.length > 0){
        //   console.log(allRegisteredProducts);
        // }else{
        //   console.log('There are no registered products yet');
        // };
        //#endregion
        //#region register new user
        //Registra un nuevo usuario
        // const newUser = await userModel.create({
        //   address: {
        //     city: 'el paso',
        //     street: 'prospect st',
        //     number: 124,
        //     zipcode: '12346-0456'
        //   },
        //   email: 'david_r@gmail.com',
        //   username: 'david_r',
        //   password: '3478*#54',
        //   name: { firstname: 'david', lastname: 'russell' },
        //   phone: '1-678-345-9856',
        // });
        // console.log(`Successfully registered user with id: ${newUser._id}`);
        //#endregion
        //#region authenticate user
        // Logea y obtiene la información del usuario
        // var username = 'johnd';
        // var password = 'm38rmF$';
        // const userAuth = await userModel.find({$and:[{username: username}, {password:password}]});
        // if(userAuth.length > 0){
        //   console.log('User login succesful');
        //   console.log(userAuth[0]);
        // }else{
        //   console.log('User not found, try again')
        // }  
        //#endregion
        //#region register product by user
        // const userId = users[3]._id.$oid;
        // const newProduct = await registeredProductModel.create({
        //   userId: userId,
        //   title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
        //   price: 109,
        //   description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
        //   category: 'electronics',
        //   image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',     
        //   rating: { rate: 4.8, count: 319 }
        // });
        // await newProduct.save();
        // console.log(`New product add with id: ${newProduct._id}`);
        //#endregion
        //#region edit product by user
        const userId = users[3]._id.$oid;
        const productId = "66104aab3d2adf9c3854872c";
        console.log(userId);
        const allProductsById = yield mongo_1.registeredProductModel.find({ userId: userId });
        if (allProductsById.length > 0) {
            // console.log('El usuario tiene los siguientes productos registrados: ', allProductsById);
            const productEdited = mongo_1.registeredProductModel.updateOne({ $and: [{ userId: userId }, { _id: productId }] }, { $set: {
                    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
                    price: 110,
                    description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
                    category: 'electronics',
                    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
                    rating: { rate: 4.8, count: 319 }
                }
            });
            console.log(productEdited);
        }
        else {
            console.log('This user does not have registered products yet, try registering products');
        }
        //#endregion
        //#region delete product by user
        //#endregion
        // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    });
}
const users = [
    {
        "_id": {
            "$oid": "661030993a6aa7094701b8b8"
        },
        "email": "john@gmail.com",
        "username": "johnd",
        "password": "m38rmF$",
        "name": {
            "firstname": "john",
            "lastname": "doe"
        },
        "address": {
            "city": "kilcoole",
            "street": "new road",
            "number": "7682",
            "zipcode": "12926-3874"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "66103aff69237db955b4b188"
        },
        "email": "morrison@gmail.com",
        "username": "mor_2314",
        "password": "83r5^_",
        "name": {
            "firstname": "david",
            "lastname": "morrison"
        },
        "address": {
            "city": "kilcoole",
            "street": "Lovers Ln",
            "number": "7267",
            "zipcode": "12926-3874"
        },
        "phone": "1-570-236-7033",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "66103bb74c4879872076476b"
        },
        "email": "kevin@gmail.com",
        "username": "kevinryan",
        "password": "kev02937@",
        "name": {
            "firstname": "kevin",
            "lastname": "ryan"
        },
        "address": {
            "city": "Cullman",
            "street": "Frances Ct",
            "number": "86",
            "zipcode": "29567-1452"
        },
        "phone": "1-567-094-1345",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "66103c961ef0bc2bec4f7c87"
        },
        "email": "don@gmail.com",
        "username": "donero",
        "password": "ewedon",
        "name": {
            "firstname": "don",
            "lastname": "romer"
        },
        "address": {
            "city": "San Antonio",
            "street": "Hunters Creek Dr",
            "number": "6454",
            "zipcode": "98234-1734"
        },
        "phone": "1-765-789-6734",
        "__v": 0
    },
    {
        "_id": {
            "$oid": "66104ba11d9128e410e11013"
        },
        "email": "derek@gmail.com",
        "username": "derek",
        "password": "jklg*_56",
        "name": {
            "firstname": "derek",
            "lastname": "powell"
        },
        "address": {
            "city": "san Antonio",
            "street": "adams St",
            "number": "245",
            "zipcode": "80796-1234"
        },
        "phone": "1-956-001-1945",
        "__v": 0
    },
];
const productToEdit = {
    title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
    price: 109,
    description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
    rating: { rate: 4.8, count: 319 }
};
