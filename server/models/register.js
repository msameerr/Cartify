import mongoose from "mongoose";
const { Schema, model } = mongoose;


const RegisterSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
});
const RegisterModel = model("register", RegisterSchema);

export default RegisterModel;