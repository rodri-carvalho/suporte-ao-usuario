const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.e;

const app = express();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
