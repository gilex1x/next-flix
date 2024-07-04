import { all } from 'redux-saga/effects';
import dataSagas from './index';

function* rootSagas() {
    yield all([dataSagas()])
};

export default rootSagas