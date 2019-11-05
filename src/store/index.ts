import { createStore, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './elements/rootReducer';
import rootSaga from './elements/rootSaga';
import { PostsState } from './elements/posts/types';

export interface ApplicationState {
  posts: PostsState
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
