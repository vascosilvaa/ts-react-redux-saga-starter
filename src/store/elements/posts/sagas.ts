// import { call, put } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';

import { loadSuccess, loadFailure } from './actions';

export function* load() {
  try {
    const response = {
      data: [
        {
          id: 2,
          content: 'primeiro dinâmico',
        },
        {
          id: 3,
          content: 'segundo dinâmico',
        },
        {
          id: 4,
          content: 'quarto dinâmico',
        },
      ],
    };
    yield put(loadSuccess(response.data));
  } catch (err) {
    yield put(loadFailure());
  }
}
