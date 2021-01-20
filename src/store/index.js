import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { initialState, dataReducer } from '../reducers';
import {fetchDataPending, fetchDataSuccess, fetchDataError} from '../actions';

const middlewares = [thunk];

export const store = createStore(dataReducer, applyMiddleware(...middlewares));

window.store = store;
export default store;
