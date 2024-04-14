import { ObjectId } from 'mongodb';

export interface Products {
    _id?: ObjectId;
    userId: ObjectId,
    title: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    dateCreated: string;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate: number;
    count: number;
}

export type NewUserProduct = Omit<Products, '_id'>;

