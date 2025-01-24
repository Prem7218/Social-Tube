import { createSlice } from "@reduxjs/toolkit";

const suggestSlice = createSlice({
    name: "suggestion",
    initialState: {},
    reducers: {
        suggestData: (state, action) => {
            Object.assign(state, action.payload);
        }
    }
})

export const { suggestData } = suggestSlice.actions; 
export default suggestSlice.reducer;