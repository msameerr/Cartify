import mongoose from "mongoose";
const { Schema, model } = mongoose;


const CheckoutSchema = new Schema({
	firstname: { type: String, required: true },
    lastname: { type: String, required: true },
	email: { type: String, required: true, unique: true },
    address: { type: String, required: true },
	address2: { type: String, required: true },
	country: { type: String, required: true },
	state: { type: String, required: true },
	zip: { type: String, required: true },
	ccname: { type: String, required: true },
	ccnumber: { type: String, required: true },
	ccexpiration: { type: String, required: true },
	cvv:{ type: String, required: true },
});
const checkoutModel = model("checkout", CheckoutSchema );

export default checkoutModel;