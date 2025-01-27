import { createSlice } from "@reduxjs/toolkit";
import { live_Count_Limit } from "../data/data";

const chatSlice = createSlice({
    name: "chating",
    initialState: {
        messages: [],
    },
    reducers: {
        addMessages: (state, action) => {
            // state.messages.spilce(3, 1);
            if(state.messages.length >= live_Count_Limit) {
                state.messages.pop();
            }
            state.messages.push(action.payload);
        },
    }
})

export const { addMessages } = chatSlice.actions;
export default chatSlice.reducer;