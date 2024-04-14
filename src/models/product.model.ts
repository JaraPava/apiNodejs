import {Schema, model, Types} from "mongoose"

const ProductSchema = new Schema({
  title: { type: String, require: [true, 'Tittle required'] },
  userId: { type: Types.ObjectId, ref: "users", required: [true,'UserId required my chiquitin :)'] },
  price: { type: Number, required: [true, 'Price requerido'] },
  description: { type: String, required: false},
  category: { type: String, enum:["electronics","jewelery","men's clothing","women's clothing"], required: false },
  image: { type: String, required: [true, 'Image required'] },
  rating: { rate: { type: Number, required: false }, count: { type: Number, required: false } },
},
  {
    timestamps:true,
    versionKey:false
  }
);

export const ProductModel = model('userProducts', ProductSchema);
