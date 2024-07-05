import { createReducer } from "@reduxjs/toolkit";
import { fetchDataRequest, fetchDataError, setResultData, setSearchResultData, fetchSearchMovie } from "./actions";
export interface SearchParams {
    page?: number;
    short?: string;
    query?: string;
}
interface MoviesState {
    data: Array<any>;
    isLoading: boolean;
    error: string | null;
    searchParams: SearchParams | undefined;
};

const initialState: MoviesState = { data: [], isLoading: false, error: 'Custom error message', searchParams: { page: 1 } };

export const appReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchDataRequest, (state, action) => {
            state.isLoading = true;
            state.searchParams = action.payload;
        })
        .addCase(fetchSearchMovie, (state, action) => {
            state.isLoading = true;
            state.searchParams = action.payload;
        })
        .addCase(setResultData, (state, action) => {
            state.isLoading = false;
            state.data = [...state.data, ...action.payload];
        })
        .addCase(setSearchResultData, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
})