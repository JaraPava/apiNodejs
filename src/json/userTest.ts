
interface User{
    _id?:{$oid:string},
    email:string,
    username:string,
    password: string,
    name:{firstname:string, lastname:string},
    address:{
        city:string,
        street:string,
        number:string,
        zipcode:string
    },
    phone:string,
    __v:number
}

export const usersTest:User[] =
  [
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

]