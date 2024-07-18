const express = require("express");
const router = express.Router({ mergeParams: true });
const { getNotes, addNote } = require("../controllers/noteController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getNotes).post()

module.exports = router;
