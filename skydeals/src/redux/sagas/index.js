import { fork, all } from 'redux-saga/effects';
import fetchProductWatcher from './fetchProductsSaga';

export default function* rootSaga() {
    yield all([
        fork(fetchProductWatcher),
    ])
}