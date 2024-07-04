import { Tuple, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { appReducer } from './reducer';
import rootSagas from './sagas/rootSagas';

const sagasMiddleWare = createSagaMiddleware();
const store = configureStore({
    reducer: appReducer,
    middleware: () => new Tuple(sagasMiddleWare),
});

sagasMiddleWare.run(rootSagas);

export default store