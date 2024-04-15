
import {  UserSaved } from "../interfaces/user";
import { UserModel } from "../models/user.model";

export const getAllUsers = async() =>{
    const allUsers = await UserModel.find({});
    if(allUsers.length > 0 ){
        return allUsers
    }
    return undefined
}

export const getUserById = async (id:string) => {
    const users:UserSaved[] = await UserModel.find({});
    if(users.length > 0){
        const user = users.find(u => u._id.toString() === id);
        if(user){
            return user
        }
    }
    return undefined;
}

// export const registerUser = async() =>{
//     const newUser = await UserModel.create({
//     address: {
//       city: 'miami',
//       street: 'avondale ave',
//       number: 345,
//       zipcode: '96378-0245'
//     },
//     email: 'kate@gmail.com',
//     username: 'kate_h',
//     password: 'kfejk@*_',
//     name: { firstname: 'kate', lastname: 'hale' },
//     phone: '1-678-456-1934',
//   });
//   console.log(`Successfully registered user with id: ${newUser._id}`);
// }