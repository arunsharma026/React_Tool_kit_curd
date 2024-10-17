import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RegisterAction } from "../action/RegisterAction";
import { ViewUserAction } from "../action/ViewUserAction";
import { DeleteAction } from "../action/DeleteAction";

// Async thunk for creating a user
 

// User slice
const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(RegisterAction.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(RegisterAction.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload); // Add the new user to the users array
            })
            .addCase(RegisterAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set the error message
            })

            .addCase(ViewUserAction.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(ViewUserAction.fulfilled, (state, action) => {
                state.loading = false;
                state.users=(action.payload); // Add the new user to the users array
            })
            .addCase(ViewUserAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set the error message
            })


            .addCase(DeleteAction.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error on new request
            })
            .addCase(DeleteAction.fulfilled, (state, action) => {
                state.loading = false;
                const {id} = action.payload
                if(id){
                    state.users = state.users.filter((curdata)=> curdata.id != id)
                }
                
                 console.log("delete use", id)
            })
            .addCase(DeleteAction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Set the error message
            });
    },
});

export default userSlice.reducer;
