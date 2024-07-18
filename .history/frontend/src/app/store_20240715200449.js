import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import ticketReducer from "../features/tickets/authSlice";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});
