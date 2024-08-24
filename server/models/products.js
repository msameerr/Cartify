import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
	name: { type: String, required: true },
	price: { type: String, required: true },
});
const ProductModel = model("product", ProductSchema);

export default ProductModel;
