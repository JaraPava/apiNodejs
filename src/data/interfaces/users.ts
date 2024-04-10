import { ObjectId } from "mongoose";

export interface User {
    _id: ObjectId
    address:  Address;
    email:    string;
    username: string;
    password: string;
    name:     Name;
    phone:    string;
}

export interface Address {
    geolocation: Geolocation;
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
}

export interface Geolocation {
    lat:  string;
    long: string;
}

export interface Name {
    firstname: string;
    lastname:  string;
}

export type NewUser = Omit<User, '_id'>;
