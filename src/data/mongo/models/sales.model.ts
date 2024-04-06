import mongoose from "mongoose"

const saleSchema = new mongoose.Schema({

},
{
    collection:"products"
}
);

export const productModel = mongoose.model('model', saleSchema);
