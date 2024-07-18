const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;

const app = express();



app.get("/api/users", (req, res) => {
	res.status(200).json({ message: "Hello" });
});

//Rotas
app.use("/api/users", require("./routes/userRoutes"))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
