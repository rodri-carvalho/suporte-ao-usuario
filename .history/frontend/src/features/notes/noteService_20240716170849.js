import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
    notes: [],
    isError: false,
    isSuccess: false,
    isloading: false,

}