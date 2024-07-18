import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
	tickets: [],
	ticket: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Criar nova ocorrência
export const register = createAsyncThunk("tickets/create", async (ticketData, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await ticketService.createTicket(ticketData, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

export const ticketSlice = createSlice({
	name: "ticket",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
		.addCase(createTicket.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(createTicket.pending, (state) => {
			state.isLoading = true;
		})
		.addCase(createTicket.pending, (state) => {
			state.isLoading = true;
		})
	},
});

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;
