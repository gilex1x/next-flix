import { createReducer } from "@reduxjs/toolkit";
import { fetchDataRequest, setResultData, setSearchResultData, fetchSearchMovie, fetchMovieDetails, setMovieDetails } from "./actions";
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
    movieDetails: any
};

const initialState: MoviesState = { dataList: [], dataSearchList: [], isLoading: false, error: 'Custom error message', searchParams: { page: 1 }, movieDetails: null };

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
        .addCase(fetchMovieDetails, (state, action) => {
            state.isLoading = true;
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
        .addCase(setMovieDetails, (state, action) => {
            state.isLoading = false;
            state.movieDetails = action.payload;
            //clear data
            state.dataSearchList = [];
            state.dataList = [];
        })
});