import { ObjectId } from "mongoose";
import { Auth } from './auth.interface';

export interface User extends Auth {
    _id: ObjectId
    address:  Address;
    username: string;
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
