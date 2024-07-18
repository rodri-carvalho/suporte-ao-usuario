const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, "Por favor, insira o nome"],
	},
	email: {
		type: String,
		required: [true, "Por favor, insira o email"],
		unique: true,
	},
	passwor: {
		type: String,
		required: [true, "Por favor, insira o email"],
		unique: true,
	},
});
