import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from "../actions";
import * as ActionTypes from "../actions/actions";

function* fetchData(action: any) {
    try {

    } catch (error) {

    }
};

function* dataSagas() {
    yield takeEvery(ActionTypes.FETCH_DATA_REQUEST, fetchData);
}

export default dataSagas