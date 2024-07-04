import { call, put, takeEvery } from "redux-saga/effects";
import { fetchDataRequest, fetchDataSuccess, fetchDataError, setResultData } from "../actions";
import * as ActionTypes from "../actions/actions";
import { getList } from "@/app/api";

function* fetchData():any {
    try {
        const data = yield call(getList);
        yield put(setResultData(data))
    } catch (error) {

    }
};

function* dataSagas() {
    yield takeEvery(ActionTypes.FETCH_DATA_REQUEST, fetchData);
}

export default dataSagas