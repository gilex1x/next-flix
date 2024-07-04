import { createAction } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const fetchDataRequest = createAction(actions.FETCH_DATA_REQUEST);
export const fetchDataSuccess = createAction(actions.FETCH_DATA_SUCCESS);
export const fetchDataError = createAction(actions.FETCH_DATA_ERROR);