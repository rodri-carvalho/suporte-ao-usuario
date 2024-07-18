const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
	let token;
	if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
		try {
			//Pegar token do header
			token = req.headers.authorization.split(" ")[1];
			//Verificar token
			const decoded = jwt.verify(token, process.env.JWT_SECRET);
			//Pegar usuário do token
			req.user = await User.findById(decoded.id).select("-password");

			next();
		} catch (error) {
			console.log(error);
			res.status(401);
			throw new Error("Não autorizado");
		}
	}
	if (!token) {
		res.status(401);
		throw new Error("Não autorizado");
	}
});

module.expo
