import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../constants/API";
import { IUser } from "../../models/IUser";

export const fetchUsers = createAsyncThunk(
    "user/getAll",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>(`${API_URL}/users`);
            return response.data;
        } catch ({message}) {
            return thunkAPI.rejectWithValue(message);
        }
    }
)