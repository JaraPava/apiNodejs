import { Products } from '../../src/data/interfaces/products.interface';
import productsToEdit from './productsToEdit.json';

export const products:Products = JSON.parse(JSON.stringify(productsToEdit));
