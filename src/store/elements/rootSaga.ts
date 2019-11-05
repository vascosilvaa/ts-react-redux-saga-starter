import { all, takeLatest } from 'redux-saga/effects';
import { PostsTypes } from './posts/types';
import { load } from './posts/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(PostsTypes.LOAD_REQUEST, load),
  ]);
}
