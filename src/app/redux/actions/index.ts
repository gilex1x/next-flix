import { createAction } from "@reduxjs/toolkit";
import { SearchParams } from "../reducer";
import * as actions from "./actions";

export const fetchDataRequest = createAction<SearchParams>(actions.FETCH_DATA_REQUEST);
export const fetchSearchMovie = createAction<SearchParams>(actions.FETCH_SEARCH_MOVIE);
export const fetchDataSuccess = createAction(actions.FETCH_DATA_SUCCESS);
export const fetchDataError = createAction(actions.FETCH_DATA_ERROR);
export const setResultData = createAction<Array<any>>(actions.SET_RESULT_DATA);
export const setSearchResultData = createAction<Array<any>>(actions.SET_SEARCH_RESULT_DATA);