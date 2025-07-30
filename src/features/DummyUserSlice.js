import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// This is the Action
export const fetchDummyUserSlice = createAsyncThunk('fetchDummyUserSlice', async() => {
    const url = 'https://dummyjson.com/users';
    const response = await fetch(url);
    const res = await response.json();
    return res;
});

const DummyUserSlice = createSlice({
    name: 'DummyUserSlice',
    initialState: {
        isLoading: false,
        apiData: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDummyUserSlice.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiData = action.payload;
        });
        
        builder.addCase(fetchDummyUserSlice.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchDummyUserSlice.rejected, (state, action) => {
            console.log("Error occured from Slice =", action.payload); 
            state.isLoading = true;
        });

    }
})

// these extraReducers will help to handle the three scenario: 
// 1: success or fullfilled
// 2: failed or Pending
// 3: Error Rejection scenarion
// Since this is an API call so we have to handle the everything

export default DummyUserSlice.reducer;