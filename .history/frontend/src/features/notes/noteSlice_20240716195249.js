import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
	notes: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
};

//Buscar notas de ocorrências
export const getNotes = createAsyncThunk("notes/getAll", async (ticketId, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await noteService.getNotes(ticketId, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

//Criar notas de ocorrências
export const createNotes = createAsyncThunk("notes/get", async (ticketId, thunkAPI) => {
	try {
		const token = thunkAPI.getState().auth.user.token;
		return await noteService.getNotes(ticketId, token);
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.toString();

		return thunkAPI.rejectWithValue(message);
	}
});

export const noteSlice = createSlice({
	name: "note",
	initialState,
	reducers: {
		reset: (state) => initialState,
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNotes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNotes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.notes = action.payload;
			})
			.addCase(getNotes.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = noteSlice.actions
export default noteSlice.reducer
