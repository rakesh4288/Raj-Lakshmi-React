import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// This is a Action, which will dispatch from another component
export const FetchingProductDetails = createAsyncThunk("productsDetails", async() => {
    const gitUrl = "https://fakestoreapi.com/products";
    const response = await fetch(gitUrl);
    const result = await response.json();
    return result;
});

export const FakeProductSlice = createSlice({
    name: 'FakeProductSlice',
    initialState: {
        apiData: [],
        isLoading: false,
        isError: null
    },
    extraReducers: (builder) => {
        builder.addCase(FetchingProductDetails.fulfilled, (state, action) => {
            state.isLoading = false;
            state.apiData = action.payload;
        });

        builder.addCase(FetchingProductDetails.pending, (state, action) => {
            state.isLoading = true;
        });

        builder.addCase(FetchingProductDetails.rejected, (state, action) => {
            state.isLoading = false;
            state.apiData = [];
            state.isError = 'Not Able to Fetch the API';
        });
    }
});

/* 
these extraReducers will help you to handle the three scenarios: 
1: fullfilled
2: pending
3: rejection

Since this is an API call so we have to handle the everything
*/

export default FakeProductSlice.reducer;