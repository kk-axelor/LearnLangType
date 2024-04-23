import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState: StateType = {
    loading: false,
    words: [],
    result: [],

}


const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        getWordsRequest: (state) => {
            state.loading = true
        },
        getWordSuccess: (state, action: PayloadAction<WordType[]>) => {
            state.loading = false,
                state.words = action.payload
        },
        getWordsFail: (state, action: PayloadAction<string>) => {
            state.error = action.payload,
                state.loading = false
        },
        saveResult: (state, action: PayloadAction<string[]>) => {
            state.result = action.payload
        },
        clearState: () => initialState
    }

})

export const {
    getWordsRequest,
    getWordSuccess, getWordsFail, saveResult, clearState } = rootSlice.actions;

export default rootSlice.reducer