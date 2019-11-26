import { put, call, takeEvery } from 'redux-saga/effects';
import { api } from '../../utils/api';
import * as types from '../actions/types';


export const apiClient = {
  fetchProducts: () => {
  const url = '/docs/search?api-version=2017-11-11';
  return api.post(url);
  },
};

export function* fetchProductsWorker() {
  try {
    const response = yield call(apiClient.fetchProducts);
    yield put({
      type: types.FETCH_PRODUCTS_SUCCESS,
      payload: { data: response.data },
    });
  } catch (error) {
    yield put({
      type: types.FETCH_PRODUCTS_ERROR,
      payload: { errors: error.response.data.message },
    });
  }
}

function* fetchProductsWatcher() {
  yield takeEvery(types.FETCH_PRODUCTS, fetchProductsWorker);
}

export default fetchProductsWatcher;
