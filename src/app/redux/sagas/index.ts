import { call, put, takeEvery } from "redux-saga/effects";
import { setResultData, setSearchResultData } from "../actions";
import * as ActionTypes from "../actions/actions";
import { getList, searchByTitle } from "@/app/api";

function* fetchData(action: any): any {
    try {
        const data = yield call(getList, action.payload);
        yield put(setResultData(data.results));
    } catch (error) {

    }
};

function* fetchQueryMovie(action: any): any {
    try {
        const data = yield call(searchByTitle, action.payload);
        yield put(setSearchResultData(data.results));
    } catch (error) {

    }
};

function* dataSagas() {
    yield takeEvery(ActionTypes.FETCH_DATA_REQUEST, fetchData);
    yield takeEvery(ActionTypes.FETCH_SEARCH_MOVIE, fetchQueryMovie);
}

export default dataSagas