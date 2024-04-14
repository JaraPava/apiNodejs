import { Auth } from './auth';

export interface User extends Auth {
    phone:    string;
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

// export type NewUser = Omit<User, '_id'>;
