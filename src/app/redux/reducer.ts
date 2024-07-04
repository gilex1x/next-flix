import { createReducer } from "@reduxjs/toolkit";
import { fetchDataRequest, fetchDataError, fetchDataSuccess, setResultData } from "./actions";
interface MoviesState {
    data: Array<any>,
    isLoading: boolean,
    error: string | null
};

const initialState: MoviesState = { data: [], isLoading: false, error: 'Custom error message' };

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchDataRequest, (state, action) => {
            state.isLoading = true;
        })
        .addCase(setResultData,(state,action)=>{
            
        })
})