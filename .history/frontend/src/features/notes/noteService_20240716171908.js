import axios from "axios";

const API_URL = "api/tickets/";

// Buscar notas de ocorrências
const getN = async (ticketId, token) => {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	const response = await axios.get(API_URL + ticketId, config);

	return response.data;
};