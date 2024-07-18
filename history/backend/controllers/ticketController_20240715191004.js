const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Pegar ocorrências do usuário
// @route GET /api/tickets
// @access Private
const getTickets = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const tickets = await Ticket.find({ user: req.user.id });

	res.status(200).json(tickets);
});

// @desc Pegar ocorrência do usuário
// @route GET /api/tickets/:id
// @access Private
const getTicket = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const ticket = await Ticket.findById(req.params.id);

	if (!ticket) {
		res.status(404);
		throw new Error("Ocorrência não encontrada");
	}

	if (ticket.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Usuário não autorizado");
	}

	res.status(200).json(ticket);
});

// @desc Criar nova ocorrência
// @routePOST  /api/tickets
// @access Private
const createTicket = asyncHandler(async (req, res) => {
	const { product, description } = req.body;

	if (!product || !description) {
		res.status(400);
		throw new Error("Por favor adicione um produto e descrição");
	}

	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const ticket = await Ticket.create({
		product,
		description,
		user: req.user.id,
		status: "nova",
	});

	res.status(201).json(ticket);
});

// @desc Deletar ocorrência
// @route DELETE /api/tickets/:id
// @access Private
const deleteTicket = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const ticket = await Ticket.findById(req.params.id);

	if (!ticket) {
		res.status(404);
		throw new Error("Ocorrência não encontrada");
	}

	if (ticket.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Usuário não autorizado");
	}

	await Ticket.remove();

	res.status(200).json({ success: true });
});

// @desc Atualizar ocorrência
// @route PUT /api/tickets/:id
// @access Private
const updateTicket = asyncHandler(async (req, res) => {
	// Pegar usuário utilizando a id e o JWT
	const user = await User.findById(req.user.id);

	if (!user) {
		res.status(401);
		throw new Error("Usuário não encontrado");
	}

	const ticket = await Ticket.findById(req.params.id);

	if (!ticket) {
		res.status(404);
		throw new Error("Ocorrência não encontrada");
	}

	if (ticket.user.toString() !== req.user.id) {
		res.status(401);
		throw new Error("Usuário não autorizado");
	}

	const updatedTicket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });

	res.status(200).json(updatedTicket);
});

module.exports = {
	getTickets,
	getTicket,
	createTicket,
	deleteTicket,
	updateTicket,
};
