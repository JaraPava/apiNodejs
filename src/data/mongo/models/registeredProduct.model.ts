import mongoose from "mongoose"

const registeredProductSchema = new mongoose.Schema({
  title: { type: String, require: [true, 'Titulo requerido'] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
  price: { type: Number, required: [true, 'Precio requerido'] },
  description: { type: String, required: false },
  category: { type: String, required: false },
  image: { type: String, required: false },
  rating: { rate: { type: Number, required: false }, count: { type: Number, required: false } },
  dateCreated: { type: Date, default: Date.now }
},
  {
    collection: "registeredProducts"
  }
);

export const ProductModel = mongoose.model('registeredProduct', registeredProductSchema);
