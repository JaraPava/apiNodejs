import { Products } from '../../src/data/interfaces/products';
import productsToEdit from './productsToEdit.json';

export const products:Products = JSON.parse(JSON.stringify(productsToEdit));
