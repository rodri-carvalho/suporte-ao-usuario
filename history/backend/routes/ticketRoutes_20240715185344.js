const express = require("express");
const router = express.Router();
const { getTickets, getTicket, createTicket } = require("../controllers/ticketController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getTickets).post(protect, createTicket);

router.route("/:id").get(protect, ge)

module.exports = router;
