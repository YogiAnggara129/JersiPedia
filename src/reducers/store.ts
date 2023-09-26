// import {applyMiddleware, createStore} from 'redux';
// import rootReducer from '.';
// import thunk from 'redux-thunk';
import {configureStore} from '@reduxjs/toolkit';
import UserReducer from './user';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({reducer: {user: UserReducer}});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
