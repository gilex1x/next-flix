import { createReducer } from "@reduxjs/toolkit";
import { fetchDataRequest, fetchDataError, setResultData, setSearchResultData, fetchSearchMovie } from "./actions";
import { MovieData } from "../api/interface";
export interface SearchParams {
    page?: number;
    short?: string;
    query?: string;
}
interface MoviesState {
    dataList: Array<MovieData>;
    dataSearchList: Array<MovieData>;
    isLoading: boolean;
    error: string | null;
    searchParams: SearchParams | undefined;
};

const initialState: MoviesState = { dataList: [], dataSearchList: [], isLoading: false, error: 'Custom error message', searchParams: { page: 1 } };

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
            state.dataList = [...state.dataList, ...action.payload];
            state.dataSearchList = [];
        })
        .addCase(setSearchResultData, (state, action) => {
            state.isLoading = false;
            state.dataSearchList = action.payload;
            state.dataList = [];
        })
})