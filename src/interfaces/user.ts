import { ObjectId } from 'mongoose';
import { Auth } from './auth';

export interface User extends Auth {
    phone:    string;
    username: string;
}

interface Address {
    // geolocation: Geolocation;
    city:        string;
    street:      string;
    number:      number;
    zipcode:     string;
}

interface Geolocation {
    lat:  string;
    long: string;
}

interface Name {
    firstname: string;
    lastname:  string;
}

export interface UserSaved extends User {_id:ObjectId};
export interface UserLogin extends User {_id:ObjectId}
