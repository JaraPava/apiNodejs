
// import mongoose from 'mongoose';
// import express from 'express';
// import productsRouter from './routes/products';
// import loginRouter from './routes/login';

import "dotenv/config";
import express from 'express';
import cors from 'cors';
import {router} from './routes'
const PORT = process.env.PORT || 3001;
const app = express();

// app.use(express.json());
app.use(cors());
app.use(router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// main().catch(err => console.log(err));

// async function main() {
  // const app = express();

  // const PORT = 3000;
  // await mongoose.connect('mongodb://127.0.0.1:27017/store');

  // console.log('connected succesful');


  // app.use('/api/products', productsRouter);
  // app.use('/api/users', loginRouter);



  //   await mongoose.connect('mongodb://127.0.0.1:27017/store');
  //   console.log('connected succesful');
  
  //#region register new user
  // // Registra un nuevo usuario
  // const newUser = await userModel.create({
  //   address: {
  //     city: 'miami',
  //     street: 'avondale ave',
  //     number: 345,
  //     zipcode: '96378-0245'
  //   },
  //   email: 'kate@gmail.com',
  //   username: 'kate_h',
  //   password: 'kfejk@*_',
  //   name: { firstname: 'kate', lastname: 'hale' },
  //   phone: '1-678-456-1934',
  // });
  // console.log(`Successfully registered user with id: ${newUser._id}`);
  //#endregion

  //#region authenticate user
  // // Logea y obtiene la información del usuario
  // var username = 'johnd';
  // var password = 'm38rmF$4';

  // const userAuth = await userModel.find({$and:[{username: username}, {password:password}]});

  // if(userAuth.length > 0){
  //   console.log('User login succesful');
  //   console.log(userAuth[0]);
  // }else{
  //   console.log('User not found, try again')
  // }  
  //#endregion

  //#region register product by user
  // //Registra el producto de un usuario mediante el id
  // const userId = usersTest[3]._id;
  // const newProduct = await registeredProductModel.create({
  //   userId: userId,
  //   title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
  //   price: 999,
  //   description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
  //   category: 'electronics',
  //   image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',     
  //   rating: { rate: 4.8, count: 319 }
  // });
  // await newProduct.save();
  // console.log(`New product add with idProduct: ${newProduct._id}`);
  //#endregion

  //#region edit product by user
  // // Usuario puede editar mediante el producto y el id del mismo
  //   var userId = new mongoose.Types.ObjectId('66103c961ef0bc2bec4f7c87');
  //   var productId = new mongoose.Types.ObjectId('66104aab3d2adf9c3854872c');
  //   console.log(`userId: ${userId} y el productId: ${productId}`);
  //   const allProductsById = await registeredProductModel.find({ userId: userId });
  //   if (allProductsById.length > 0) {
  //     // console.log('El usuario tiene los siguientes productos registrados: ', allProductsById);
  //     await registeredProductModel.findOneAndUpdate(
  //       {
  //         $and: [
  //           { _id: new mongoose.Types.ObjectId("66104aab3d2adf9c3854872c") },
  //           { userId: new mongoose.Types.ObjectId("661030993a6aa7094701b8b8") }
  //         ]
  //       },
  //       {
  //         $set: {
  //           title: 'Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5',
  //           price: 444,
  //           description: '3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.',
  //           category: 'electronics',
  //           image: 'https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg',
  //           rating: { rate: 4.8, count: 319 }
  //         }
  //       }
  //     );

  //     // console.log(productEdited);
  //   } else {
  //     console.log('This user does not have registered products yet, try registering products');
  //   }
  //#endregion

  //#region delete product by user
  // var userId = new mongoose.Types.ObjectId('66103c961ef0bc2bec4f7c87');
  // var productId = new mongoose.Types.ObjectId('66104aab3d2adf9c3854872c');
  // // console.log(`userId: ${userId} y el productId: ${productId}`);
  // const allProductsById = await registeredProductModel.find({ userId: userId });
  // if (allProductsById.length > 0) {
  //   // console.log('El usuario tiene los siguientes productos registrados: ', allProductsById);
  //   await registeredProductModel.deleteOne(
  //     {
  //       $and: [
  //         { _id: new mongoose.Types.ObjectId("66104aab3d2adf9c3854872c") },
  //         { userId: new mongoose.Types.ObjectId("661030993a6aa7094701b8b8") }
  //       ]
  //     },
  //   );
  //   // console.log(productEdited);
  // } else {
  //   console.log('This user does not have registered products yet, try registering products');
  // }
  //#endregion

// }


