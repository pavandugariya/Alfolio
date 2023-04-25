import AuthReducer from './AuthReducer/AuthReducer';

const {combineReducers} = require('redux');

const RootReducer = combineReducers({
  AuthR: AuthReducer,
});
export default RootReducer;
