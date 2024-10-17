import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";

import axios from "axios";

export const DeleteAction = createAsyncThunk("DeleteAction", async (id, {rejectWithValue})=>{
    try{
        const response = await axios.delete(`https://631b1541fae3df4dcff40bb2.mockapi.io/users/${id}`);
        return response.data
    }
    catch(err){
        return(rejectWithValue (err.response ? err.response.data : "An error occurred"))
    }
})