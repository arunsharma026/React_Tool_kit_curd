import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

// Async thunk for user registration
export const RegisterAction = createAsyncThunk(
    "user/register",
    async (data, { rejectWithValue }) => {
        try {
            const response = await axios.post("https://631b1541fae3df4dcff40bb2.mockapi.io/users", {
                Name: data.name,
                Email: data.email,
                Age: data.age,
                role: data.role,
                survey: data.survey,
                surveyoption: data.surveyoption,
                Message: data.comment,
            });
            console.log("create res", response) 
            return response.data; // Return the created user data
        } catch (err) {
            return rejectWithValue(err.response ? err.response.data : "An error occurred"); // Handle error message
        }
    }
);
