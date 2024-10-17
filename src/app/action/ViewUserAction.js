import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const ViewUserAction = createAsyncThunk( "viewuser", async(data, {rejectWithValue})=>{
    try{
        const response = await axios.get("https://631b1541fae3df4dcff40bb2.mockapi.io/users");
        return response.data;
    } catch (err) {
        return rejectWithValue(err.response ? err.response.data : "An error occurred"); // Handle error message
    }
}) 