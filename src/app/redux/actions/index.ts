import { createAction } from "@reduxjs/toolkit";
import { SearchParams } from "../reducer";
import * as actions from "./actions";

export const fetchDataRequest = createAction<SearchParams>(actions.FETCH_DATA_REQUEST);
export const fetchSearchMovie = createAction<SearchParams>(actions.FETCH_SEARCH_MOVIE);
export const fetchMovieDetails = createAction<number>(actions.FETCH_MOVIE_DETAILS);

export const setMovieDetails = createAction(actions.SET_MOVIE_DETAILS);
export const setResultData = createAction<Array<any>>(actions.SET_RESULT_DATA);
export const setSearchResultData = createAction<Array<any>>(actions.SET_SEARCH_RESULT_DATA);