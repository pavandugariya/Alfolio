import {createStore} from 'redux';

import RootReducer from '../Reducer';
const store = createStore(RootReducer);
export default store;
